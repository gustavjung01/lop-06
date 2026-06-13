const API_BASE_URL = 'https://hochungkhoi.site/api';
const APP_ID = 'app-lop-06';
const LICENSE_STORAGE_KEY = 'lop6.license.entitlement';
const LICENSE_KEY_STORAGE_KEY = 'lop6.license.key';
const DEVICE_ID_STORAGE_KEY = 'lop6.deviceId';
const LOP6_ACCOUNT_EMAIL_KEY = 'lop6.account.email';

export interface Entitlement {
  appId: string;
  productId: string;
  productName: string;
  plan: string;
  status: string;
  allowedGrades: number[];
  activatedGrades: number[];
  features: {
    desktopOfflineTts: boolean;
    downloadByGrade: boolean;
    downloadAllGrades: boolean;
    aiTutor: boolean;
  };
  license?: {
    deviceLimit: number;
    offlineGraceDays: number;
    expiresAt: string | null;
  };
}

export function getOrCreateDeviceId(): string {
  let deviceId = window.localStorage.getItem(DEVICE_ID_STORAGE_KEY);
  if (!deviceId) {
    deviceId = 'lop6-web-' + crypto.randomUUID();
    window.localStorage.setItem(DEVICE_ID_STORAGE_KEY, deviceId);
  }
  return deviceId;
}

export async function activateLop6License(licenseKey: string): Promise<{ ok: boolean; status?: string; error?: string; entitlement?: Entitlement }> {
  try {
    const deviceId = getOrCreateDeviceId();
    const response = await fetch(`${API_BASE_URL}/licenses/activate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        licenseKey,
        appId: APP_ID,
        deviceId,
        deviceName: navigator.userAgent || 'Web App Lớp 6',
      }),
    });

    const data = await response.json();

    if (data.ok && data.status === 'active' && data.entitlement) {
      window.localStorage.setItem(LICENSE_STORAGE_KEY, JSON.stringify(data.entitlement));
      window.localStorage.setItem(LICENSE_KEY_STORAGE_KEY, licenseKey);
    }

    return data;
  } catch (error) {
    console.error('Lỗi khi kích hoạt bản quyền:', error);
    return { ok: false, error: 'Lỗi mạng khi kích hoạt. Vui lòng thử lại.' };
  }
}

export function getStoredLop6Entitlement(): Entitlement | null {
  const stored = window.localStorage.getItem(LICENSE_STORAGE_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch (error) {
    return null;
  }
}

export function clearStoredLop6Entitlement(): void {
  window.localStorage.removeItem(LICENSE_STORAGE_KEY);
  window.localStorage.removeItem(LICENSE_KEY_STORAGE_KEY);
}

export function getStoredLop6LicenseKey(): string | null {
  return window.localStorage.getItem(LICENSE_KEY_STORAGE_KEY);
}

export function saveLop6LicenseKey(key: string): void {
  window.localStorage.setItem(LICENSE_KEY_STORAGE_KEY, key);
}

export function isLop6EntitlementActive(): boolean {
  const entitlement = getStoredLop6Entitlement();
  if (!entitlement) return false;
  if (entitlement.appId !== APP_ID) return false;
  if (entitlement.status !== 'active') return false;

  if (entitlement.license?.expiresAt) {
    const expires = new Date(entitlement.license.expiresAt).getTime();
    if (Date.now() > expires) return false;
  }

  return true;
}

export function getStoredLop6Email(): string | null {
  return window.localStorage.getItem(LOP6_ACCOUNT_EMAIL_KEY);
}

export function saveLop6Email(email: string): void {
  window.localStorage.setItem(LOP6_ACCOUNT_EMAIL_KEY, email);
}

export function clearLop6Email(): void {
  window.localStorage.removeItem(LOP6_ACCOUNT_EMAIL_KEY);
}

export function hasActiveEntitlement(): boolean {
  return isLop6EntitlementActive();
}

export function isFreeTrialMode(): boolean {
  return !hasActiveEntitlement();
}

export function canAccessSubject(subjectId: string): boolean {
  if (isFreeTrialMode()) {
    return subjectId === 'toan' || subjectId === 'math';
  }
  return true;
}

// Check access to Math lessons (lessonIndex is 0-based)
// In free trial mode, only the first 15 lessons (index 0 to 14) are accessible
export function canAccessMathLesson(lessonIndex: number): boolean {
  if (isFreeTrialMode()) {
    return lessonIndex < 15;
  }
  return true;
}
