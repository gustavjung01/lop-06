import { useCallback, useEffect, useState } from 'react';
import { Download, RefreshCw, MonitorDown, ExternalLink } from 'lucide-react';
import { checkForDesktopUpdate, installDesktopUpdate, listenDesktopUpdateStatus, getDesktopAppVersion, isDesktopApp, type UpdateStatus } from '../services/desktopElectronUpdate';

const DESKTOP_DOWNLOAD_URL = 'https://pub-53f18eb6ccaf40f5a7c141e65e97dfb3.r2.dev/app-updates/app-lop-06/HocHungKhoi_Lop06-Win.exe';

type Tone = 'ok' | 'warn' | 'muted';

function getStateLabel(status: UpdateStatus | null, isDesktop: boolean): string {
  if (!status) {
    return isDesktop ? 'Chưa kiểm tra cập nhật' : 'Chưa có bản desktop';
  }

  if (status.state === 'checking') return 'Đang kiểm tra cập nhật...';
  if (status.state === 'downloading') return `Đang tải ${status.progress?.toFixed(0) || 0}%`;
  if (status.state === 'downloaded') return 'Sẵn sàng khởi động lại để cập nhật';
  if (status.state === 'update-available') return 'Có bản mới';
  if (status.state === 'up-to-date') return 'Đang dùng bản mới nhất';
  if (status.state === 'error') return `Lỗi: ${status.error}`;
  return 'Trạng thái không xác định';
}

function getTone(status: UpdateStatus | null): Tone {
  if (!status) return 'muted';
  if (status.state === 'up-to-date') return 'ok';
  if (status.state === 'downloading' || status.state === 'update-available' || status.state === 'downloaded') return 'warn';
  if (status.state === 'error') return 'muted';
  return 'muted';
}

export function DesktopAppUpdatePanel() {
  const [status, setStatus] = useState<UpdateStatus | null>(null);
  const [checking, setChecking] = useState(false);
  const [desktopVersion, setDesktopVersion] = useState<string | null>(null);
  const isDesktop = isDesktopApp();

  useEffect(() => {
    if (!isDesktop) return;

    const unsubscribe = listenDesktopUpdateStatus((newStatus) => {
      setStatus(newStatus);
      setChecking(newStatus.state === 'checking');
    });

    void getDesktopAppVersion().then((version) => {
      if (version) setDesktopVersion(version);
    });

    return () => {
      unsubscribe?.();
    };
  }, [isDesktop]);

  const runCheck = useCallback(async () => {
    if (!isDesktop) {
      setStatus({ state: 'error', message: 'Chạy trên desktop để dùng tính năng này', error: 'Không phải Electron' });
      return;
    }

    setChecking(true);
    const result = await checkForDesktopUpdate();
    if (result) {
      setStatus(result);
    }
    setChecking(false);
  }, [isDesktop]);

  const handleInstallClick = useCallback(async () => {
    if (isDesktop && status?.state === 'downloaded') {
      await installDesktopUpdate();
      return;
    }

    if (isDesktop && status?.state === 'update-available') {
      await runCheck();
      return;
    }

    window.open(DESKTOP_DOWNLOAD_URL, '_blank');
  }, [isDesktop, runCheck, status]);

  useEffect(() => {
    if (!isDesktop) return;
    void runCheck();
  }, [isDesktop, runCheck]);

  const tone = getTone(status);
  const buttonLabel = isDesktop
    ? status?.state === 'downloaded'
      ? 'Khởi động lại để cập nhật'
      : status?.state === 'update-available'
        ? 'Cập nhật ngay'
        : 'Tải app desktop'
    : 'Tải app desktop';

  const message = getStateLabel(status, isDesktop);
  const toneClass = tone === 'ok'
    ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
    : tone === 'warn'
      ? 'border-amber-200 bg-amber-50 text-amber-800'
      : 'border-slate-200 bg-slate-50 text-slate-700';

  return (
    <section id="desktop-app-update" className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="app-card overflow-hidden rounded-[1.75rem] border shadow-sm">
        <div className="grid gap-4 p-4 lg:grid-cols-[1fr_330px] lg:p-5">
          <div className="flex gap-4">
            <div className="app-soft flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-blue-700">
              <MonitorDown className="h-7 w-7" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">Desktop app</p>
              <h2 className="mt-1 text-xl font-black text-slate-950">Ứng dụng Lớp 06</h2>
              <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-slate-600">
                {isDesktop
                  ? 'Kiểm tra và cài đặt bản cập nhật trực tiếp từ R2. Khi có bản mới, bấm cập nhật ngay và khởi động lại để áp dụng.'
                  : 'Dùng app desktop Windows để học ổn định hơn. Bấm vào nút để tải file cài đặt khi đã upload lên R2.'}
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold">
                <span className="app-chip rounded-full border px-3 py-1.5">Bản hiện tại: {desktopVersion || '---'}</span>
                <span className={`rounded-full border px-3 py-1.5 ${toneClass}`}>{message}</span>
              </div>
            </div>
          </div>

          <div className="grid content-center gap-2 rounded-3xl border border-blue-100 bg-blue-50/70 p-4">
            <button
              type="button"
              onClick={runCheck}
              disabled={checking}
              className="app-secondary inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-black transition hover:-translate-y-0.5 disabled:opacity-70"
            >
              <RefreshCw className={`h-4 w-4 ${checking ? 'animate-spin' : ''}`} />
              {checking ? 'Đang kiểm tra...' : 'Kiểm tra cập nhật'}
            </button>

            <button
              type="button"
              onClick={handleInstallClick}
              className="app-primary inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-black shadow-md transition hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              {buttonLabel}
            </button>

            {!isDesktop ? (
              <a
                href={DESKTOP_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900"
              >
                Mở link tải trực tiếp
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : null}

            <p className="text-[11px] font-semibold leading-5 text-slate-600">
              {isDesktop
                ? 'Bản desktop sẽ tự kiểm tra và tải bản mới từ kênh cập nhật R2.'
                : 'Phiên bản web không cập nhật tự động. Dùng bản desktop để trải nghiệm tính năng này.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
