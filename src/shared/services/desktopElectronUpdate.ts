export type UpdateState =
  | 'checking'
  | 'update-available'
  | 'downloading'
  | 'downloaded'
  | 'up-to-date'
  | 'error';

export interface UpdateStatus {
  state: UpdateState;
  version?: string;
  progress?: number;
  message?: string;
  error?: string;
  bytesPerSecond?: number;
  transferred?: number;
  total?: number;
}

export interface ElectronUpdateAPI {
  checkForUpdates: () => Promise<any>;
  installUpdate: () => Promise<any>;
  onUpdateStatus: (callback: (status: UpdateStatus) => void) => () => void;
  getAppVersion: () => Promise<string>;
}

declare global {
  interface Window {
    electronAPI?: ElectronUpdateAPI;
  }
}

function isElectronEnvironment(): boolean {
  return typeof window !== 'undefined' && typeof window.electronAPI !== 'undefined';
}

function getElectronAPI(): ElectronUpdateAPI | null {
  if (!isElectronEnvironment()) return null;
  return window.electronAPI as ElectronUpdateAPI;
}

export async function checkForDesktopUpdate(): Promise<UpdateStatus | null> {
  const api = getElectronAPI();
  if (!api) return null;

  try {
    const result = await api.checkForUpdates();
    if (result.success) {
      return { state: 'checking', message: 'Đang kiểm tra cập nhật...' };
    }
    return { state: 'error', error: result.error, message: result.error };
  } catch (err: any) {
    return { state: 'error', error: String(err), message: String(err) };
  }
}

export async function installDesktopUpdate(): Promise<UpdateStatus | null> {
  const api = getElectronAPI();
  if (!api) return null;

  try {
    const result = await api.installUpdate();
    if (result.success) {
      return { state: 'downloaded', message: 'Đang cài đặt...' };
    }
    return { state: 'error', error: result.error, message: result.error };
  } catch (err: any) {
    return { state: 'error', error: String(err), message: String(err) };
  }
}

export function listenDesktopUpdateStatus(callback: (status: UpdateStatus) => void): (() => void) | null {
  const api = getElectronAPI();
  if (!api) return null;

  return api.onUpdateStatus((status: UpdateStatus) => {
    callback(status);
  });
}

export async function getDesktopAppVersion(): Promise<string | null> {
  const api = getElectronAPI();
  if (!api) return null;

  try {
    return await api.getAppVersion();
  } catch {
    return null;
  }
}

export function isDesktopApp(): boolean {
  return isElectronEnvironment();
}
