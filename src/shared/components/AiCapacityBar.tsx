import { useCallback, useEffect, useRef, useState } from 'react';
import { AlertCircle, ExternalLink, Sparkles, X } from 'lucide-react';
import { getDopiAICapacity, getStoredDopiKey, validateAndSaveDopiKey } from '../services/serverAiChat';

type AiCapacityTransaction = {
  id: string;
  type: string;
  amount: number;
  balanceAfter: number;
  createdAt: string;
};

interface AiCapacityBarProps {
  showTooltip?: boolean;
  onExhausted?: () => void;
  refreshInterval?: number;
  compact?: boolean;
  purchaseHref?: string;
  purchaseLabel?: string;
  onBuyMore?: () => void;
}

function clamp(value: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function formatDopi(value: number | null) {
  if (value === null) return '...';
  return `${Math.max(0, Math.floor(value)).toLocaleString('vi-VN')} Dopi`;
}

function getStats(balance: number | null, transactions: AiCapacityTransaction[]) {
  const purchaseTotal = transactions.reduce((sum, txn) => (txn.amount > 0 ? sum + txn.amount : sum), 0);
  const usageTotal = transactions.reduce((sum, txn) => (txn.amount < 0 ? sum + Math.abs(txn.amount) : sum), 0);
  const hasHistory = purchaseTotal > 0 || usageTotal > 0;

  const total = purchaseTotal > 0 ? purchaseTotal : hasHistory ? Math.max(usageTotal + (balance ?? 0), 1) : 100;
  const remainingPct = balance === null ? null : clamp((balance / Math.max(total, 1)) * 100);

  let tone: 'good' | 'warning' | 'critical' = 'good';
  if (balance === null) tone = 'good';
  else if (balance <= 0 || (remainingPct ?? 0) <= 20) tone = 'critical';
  else if ((remainingPct ?? 0) <= 60) tone = 'warning';

  const label = formatDopi(balance);

  return { remainingPct, tone, label };
}

type PopupMode = 'redeem' | 'missing' | 'invalid' | 'empty' | 'ready';

export function AiCapacityBar({
  showTooltip = true,
  onExhausted,
  refreshInterval = 30000,
  compact = false,
  purchaseHref = 'https://hochungkhoi.site/',
  purchaseLabel = 'Mua thêm',
  onBuyMore,
}: AiCapacityBarProps) {
  const [balance, setBalance] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<AiCapacityTransaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [linkedWalletLabel, setLinkedWalletLabel] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [forcedPopupMode, setForcedPopupMode] = useState<PopupMode | null>(null);
  const [redeemKey, setRedeemKey] = useState('');
  const [redeemLoading, setRedeemLoading] = useState(false);
  const [redeemMessage, setRedeemMessage] = useState<string | null>(null);
  const previousBalanceRef = useRef<number | null>(null);

  const fetchCapacity = useCallback(async () => {
    setLoading(true);
    setError(null);

    const result = await getDopiAICapacity();
    if (result.ok) {
      const nextBalance = Number(result.balance || 0);
      const prevBalance = previousBalanceRef.current;
      setBalance(nextBalance);
      setTransactions(result.transactions || []);
      setLinkedWalletLabel(
        result.authType === 'dopi'
          ? 'Dopi key đang dùng'
          : result.walletId
            ? `Ví: ${String(result.walletId).replace(/^(license|email|user):/, '')}`
            : null,
      );

      if (nextBalance === 0 && prevBalance !== null && prevBalance > 0) {
        onExhausted?.();
        setForcedPopupMode('empty');
        setShowPopup(true);
      }

      previousBalanceRef.current = nextBalance;
    } else {
      setError(result.error || 'Không thể lấy dung lượng');
      setLinkedWalletLabel(null);
      setBalance(0);
      setTransactions([]);

      if (String(result.error || '').toLowerCase().includes('het dung luong')) {
        setForcedPopupMode('empty');
        setShowPopup(true);
      }
    }

    setLoading(false);
  }, [onExhausted]);

  const handleRedeem = useCallback(async () => {
    const key = redeemKey.trim();
    if (!key || redeemLoading) return;

    setRedeemLoading(true);
    setRedeemMessage(null);
    try {
      const result = await validateAndSaveDopiKey(key);
      if (result.ok) {
        setRedeemKey('');
        setForcedPopupMode('ready');
        setRedeemMessage(`Đã lưu Dopi key. Số dư hiện tại: ${formatDopi(Number(result.balance || 0))}.`);
        await fetchCapacity();
      } else {
        setForcedPopupMode('invalid');
        setRedeemMessage(result.error || 'Không thể lưu Dopi key.');
      }
    } finally {
      setRedeemLoading(false);
    }
  }, [fetchCapacity, redeemKey, redeemLoading]);

  const handleBuyMore = useCallback(() => {
    if (onBuyMore) {
      onBuyMore();
      return;
    }

    if (purchaseHref) {
      window.open(purchaseHref, '_blank', 'noopener,noreferrer');
    }
  }, [onBuyMore, purchaseHref]);

  const openRedeemPopup = useCallback(() => {
    setForcedPopupMode('redeem');
    setRedeemMessage(null);
    setShowPopup(true);
  }, []);

  useEffect(() => {
    const handleOpenKeyPopup = () => openRedeemPopup();
    window.addEventListener('hhk:dopi-key-popup-open', handleOpenKeyPopup);
    return () => window.removeEventListener('hhk:dopi-key-popup-open', handleOpenKeyPopup);
  }, [openRedeemPopup]);

  useEffect(() => {
    fetchCapacity();
    const interval = setInterval(fetchCapacity, refreshInterval);
    return () => clearInterval(interval);
  }, [fetchCapacity, refreshInterval]);

  const stats = getStats(balance, transactions);
  const toneClass =
    stats.tone === 'good'
      ? 'border-emerald-200 bg-emerald-50/85 text-emerald-900'
      : stats.tone === 'warning'
        ? 'border-amber-200 bg-amber-50/90 text-amber-900'
        : 'border-rose-200 bg-rose-50/90 text-rose-900';
  const barClass =
    stats.tone === 'good'
      ? 'from-emerald-500 to-cyan-500'
      : stats.tone === 'warning'
        ? 'from-amber-500 to-orange-500'
        : 'from-rose-500 to-red-500';

  const storedDopiKey = getStoredDopiKey();
  const normalizedError = String(error || '').toLowerCase();
  const autoPopupMode: PopupMode = !storedDopiKey || normalizedError.includes('chua co dopi key')
    ? 'missing'
    : normalizedError.includes('khong hop le')
      ? 'invalid'
      : balance !== null && balance <= 0
        ? 'empty'
        : 'ready';
  const popupMode = forcedPopupMode || autoPopupMode;
  const popupTitle =
    popupMode === 'redeem'
      ? 'Nhập / nạp Dopi key'
      : popupMode === 'missing'
        ? 'Chưa nhập Dopi key'
        : popupMode === 'invalid'
          ? 'Dopi key không hợp lệ'
          : popupMode === 'ready'
            ? 'Dopi key đã sẵn sàng'
            : 'Dung lượng AI đã hết';
  const popupSubtitle =
    popupMode === 'redeem'
      ? 'Dán Dopi key mới để liên kết ví hoặc nạp thêm dung lượng.'
      : popupMode === 'missing'
        ? 'Nhập Dopi key để lưu và dùng ở mọi app.'
        : popupMode === 'invalid'
          ? 'Hãy kiểm tra lại Dopi key đã nhập.'
          : popupMode === 'ready'
            ? `Số dư hiện tại: ${formatDopi(balance)}`
            : 'Bạn cần nạp thêm để tiếp tục chat';
  const popupMessage =
    popupMode === 'redeem'
      ? 'Khu này chỉ dùng để nhập Dopi key. Nếu cần mua thêm key, bấm Mua thêm bên dưới.'
      : popupMode === 'missing'
        ? 'Bạn chưa lưu Dopi key nên hệ thống chưa có ví AI để trừ dung lượng.'
        : popupMode === 'invalid'
          ? 'Mã Dopi không khớp hoặc đã bị vô hiệu hóa.'
          : popupMode === 'ready'
            ? 'Dopi đã liên kết. Bạn có thể đóng cửa sổ này và tiếp tục hỏi bài.'
            : 'Dung lượng AI đã hết, hãy nạp thêm để tiếp tục dùng AI.';

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => !loading && fetchCapacity()}
          title={showTooltip ? 'Bấm để cập nhật dung lượng' : undefined}
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all hover:-translate-y-0.5 hover:shadow-sm ${toneClass} ${showTooltip ? 'cursor-pointer' : 'cursor-default'} ${compact ? 'max-w-[220px]' : 'max-w-[280px]'}`}
        >
          <Sparkles className="h-3.5 w-3.5 shrink-0" />
          <span className="hidden sm:inline">Dopi</span>
          <span className="sm:hidden">Dopi</span>

          <span className="inline-flex h-2 w-16 overflow-hidden rounded-full bg-white/70">
            <span
              className={`h-full rounded-full bg-gradient-to-r ${barClass} transition-all duration-300`}
              style={{ width: `${stats.remainingPct ?? 0}%` }}
            />
          </span>

          <span className="min-w-[72px] text-right tabular-nums">{loading ? '...' : stats.label}</span>
          {loading && <span className="ml-0.5 inline-block h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />}
        </button>
        <button
          type="button"
          onClick={openRedeemPopup}
          className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-white px-3 py-1.5 text-xs font-semibold text-sky-700 transition hover:bg-sky-50"
        >
          Nạp Dopi
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl animate-in fade-in zoom-in duration-200">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    popupMode === 'missing' || popupMode === 'redeem' || popupMode === 'ready'
                      ? 'bg-sky-100'
                      : popupMode === 'invalid'
                        ? 'bg-amber-100'
                        : 'bg-red-100'
                  }`}
                >
                  <AlertCircle
                    className={`h-6 w-6 ${
                      popupMode === 'missing' || popupMode === 'redeem' || popupMode === 'ready'
                        ? 'text-sky-600'
                        : popupMode === 'invalid'
                          ? 'text-amber-600'
                          : 'text-red-600'
                    }`}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{popupTitle}</h3>
                  <p className="text-sm text-gray-500">{popupSubtitle}</p>
                </div>
              </div>
              <button type="button" onClick={() => setShowPopup(false)} className="p-1 text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div
              className={`mb-4 rounded-lg p-4 ${
                popupMode === 'missing' || popupMode === 'redeem' || popupMode === 'ready'
                  ? 'border border-sky-200 bg-sky-50'
                  : popupMode === 'invalid'
                    ? 'border border-amber-200 bg-amber-50'
                    : 'border border-rose-200 bg-rose-50'
              }`}
            >
              <p
                className={`text-sm leading-relaxed ${
                  popupMode === 'missing' || popupMode === 'redeem' || popupMode === 'ready'
                    ? 'text-sky-800'
                    : popupMode === 'invalid'
                      ? 'text-amber-800'
                      : 'text-rose-800'
                }`}
              >
                <strong>{popupMode === 'invalid' ? 'Mã Dopi!' : popupMode === 'empty' ? 'Dung lượng!' : 'Dopi!'}</strong>{' '}
                {popupMessage}
              </p>
            </div>

            <div className="mb-4 rounded-xl border border-sky-200 bg-sky-50 p-4">
              <p className="text-sm font-bold text-sky-900">Nhập Dopi key</p>
              <p className="mt-1 text-xs text-sky-700">Dán Dopi key rồi bấm lưu để dùng chung ở mọi app.</p>
              {linkedWalletLabel && (
                <p className="mt-1 text-xs font-semibold text-sky-700">
                  Ví đang liên kết: <strong>{linkedWalletLabel}</strong>
                </p>
              )}
              <div className="mt-3 flex gap-2">
                <input
                  value={redeemKey}
                  onChange={(e) => setRedeemKey(e.target.value)}
                  placeholder="DOPI-XXXX-XXXX-XXXX-XXXX"
                  className="min-w-0 flex-1 rounded-xl border border-sky-200 bg-white px-3 py-2 text-sm font-mono text-slate-800 outline-none focus:border-sky-400"
                />
                <button
                  type="button"
                  onClick={handleRedeem}
                  disabled={redeemLoading || !redeemKey.trim()}
                  className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:opacity-60"
                >
                  {redeemLoading ? 'Đang lưu...' : 'Lưu key'}
                </button>
              </div>
              {redeemMessage && <p className="mt-2 text-xs font-semibold text-sky-800">{redeemMessage}</p>}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowPopup(false)}
                className="flex-1 rounded-xl bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
              >
                Đóng
              </button>
              <button
                onClick={handleBuyMore}
                type="button"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                <span>{purchaseLabel}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AiCapacityBar;
