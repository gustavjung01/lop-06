import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

type RootErrorBoundaryProps = {
  children: ReactNode;
};

type RootErrorBoundaryState = {
  hasError: boolean;
};

export class RootErrorBoundary extends Component<RootErrorBoundaryProps, RootErrorBoundaryState> {
  state: RootErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): RootErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('RootErrorBoundary caught an app error', error, info);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 font-sans text-slate-950 antialiased">
        <section className="w-full max-w-md rounded-3xl border border-rose-100 bg-white p-6 text-center shadow-xl shadow-slate-200/70">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
            <AlertTriangle className="h-7 w-7" />
          </div>
          <h1 className="mt-4 text-2xl font-black">Có lỗi xảy ra</h1>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
            App gặp lỗi khi hiển thị. Em có thể tải lại để tiếp tục học.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-blue-700 active:translate-y-0"
          >
            <RefreshCcw className="h-4 w-4" />
            Tải lại app
          </button>
        </section>
      </main>
    );
  }
}
