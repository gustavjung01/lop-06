import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { CheckCircle2, Info, X, XCircle } from 'lucide-react';

import { BadgeToast } from './BadgeToast';

type ToastType = 'success' | 'error' | 'info' | 'badge';

type Toast = {
  id: number;
  type: ToastType;
  title: string;
  message?: string;
};

type ToastContextValue = {
  showToast: (toast: Omit<Toast, 'id'>, duration?: number) => void;
  success: (title: string, message?: string) => void;
  error: (title: string, message?: string) => void;
  info: (title: string, message?: string) => void;
  badge: (title: string, message?: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

let nextToastId = 0;

const toastStyle: Record<ToastType, string> = {
  success: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  error: 'border-rose-200 bg-rose-50 text-rose-800',
  info: 'border-blue-200 bg-blue-50 text-blue-800',
  badge: 'border-amber-200 bg-white text-slate-800',
};

const toastIcon: Record<Exclude<ToastType, 'badge'>, typeof CheckCircle2> = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismiss = useCallback((id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback((toast: Omit<Toast, 'id'>, duration = 3000) => {
    const id = ++nextToastId;
    setToasts((current) => [...current, { ...toast, id }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((item) => item.id !== id));
    }, duration);
  }, []);

  const value = useMemo<ToastContextValue>(
    () => ({
      showToast,
      success: (title, message) => showToast({ type: 'success', title, message }),
      error: (title, message) => showToast({ type: 'error', title, message }, 3600),
      info: (title, message) => showToast({ type: 'info', title, message }),
      badge: (title, message) => showToast({ type: 'badge', title, message }, 4200),
    }),
    [showToast],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed right-4 top-4 z-[80] flex w-[min(92vw,380px)] flex-col gap-3">
        {toasts.map((toast) => {
          if (toast.type === 'badge') {
            return (
              <div
                key={toast.id}
                className={`pointer-events-auto rounded-3xl border p-4 shadow-xl shadow-slate-200/80 ${toastStyle.badge}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <BadgeToast title={toast.title} description={toast.message ?? 'Vừa mở khóa huy hiệu mới.'} />
                  <button
                    type="button"
                    onClick={() => dismiss(toast.id)}
                    className="rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    aria-label="Đóng thông báo"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          }

          const Icon = toastIcon[toast.type];

          return (
            <div
              key={toast.id}
              className={`pointer-events-auto rounded-2xl border px-4 py-3 shadow-xl shadow-slate-200/70 ${toastStyle[toast.type]}`}
              role="status"
              aria-live="polite"
            >
              <div className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-black">{toast.title}</p>
                  {toast.message ? <p className="mt-0.5 text-xs font-semibold leading-5">{toast.message}</p> : null}
                </div>
                <button
                  type="button"
                  onClick={() => dismiss(toast.id)}
                  className="rounded-full p-1 opacity-60 transition hover:bg-white/70 hover:opacity-100"
                  aria-label="Đóng thông báo"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used inside ToastProvider');
  }

  return context;
}
