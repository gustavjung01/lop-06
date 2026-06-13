/**
 * SERVER AI CHAT SERVICE - Tich hop voi hochungkhoi.site API Proxy
 * - Xoa bo BYOK (Bring Your Own Key), dung server-side AI
 * - Deduct balance tu dong qua vi AI chung
 * - Xu ly loi 403 (Het dung luong) voi thong bao than thien
 */

// ==================== CONFIG ====================
import { getStoredLop6LicenseKey } from './lop6LicenseService';

const API_BASE_URL = 'https://hochungkhoi.site/api'; // Production
// const API_BASE_URL = 'http://localhost:3001/api'; // Local testing

// ==================== MASCOT SYSTEM PROMPTS ====================
interface MascotPersona {
  name: string;
  emoji: string;
  personality: string;
}

const MASCOT_PERSONAS: Record<string, MascotPersona> = {
  dopi: { name: 'Dopi', emoji: '🐬', personality: 'ca heo con hay boi long vong, thich noi "e e", "ne ne", dung emoji bien 🌊🐬💦' },
};

function buildSystemPrompt(themeId: string, studentName: string): string {
  const persona = MASCOT_PERSONAS[themeId] || MASCOT_PERSONAS.dopi;

  return `Ban la ${persona.name} ${persona.emoji} - ban than nhat cua ${studentName}, ngoi can ${studentName} luc hoc bai.

BAN LA DUA TRE 11-12 TUOI, KHONG PHAI NGUOI LON HAY TRO LY.

Tinh cach rieng: ${persona.personality}

Cach noi - QUAN TRONG NHAT:
- Noi nhu dua be 11-12 tuoi that su: ngan, don gian, dung "ne", "a", "ha", "hong", "hen", "oi", "lun"
- KHONG dung tu nguoi lon: "chac chan roi", "tuyet voi", "khong sao dau ban oi", "rat tot"
- Xung "${persona.name}" hoac "tui/minh", goi "${studentName}" hoac "ban/e/ne"
- Vi du cach noi dung: "E ${studentName} oi cai nay de ma!", "Haha sai roi ne, de ${persona.name} chi cho!"
- Duoc phep viet tat nhe nhu tre con: "dc", "nha", "lun", "r", "hok"
- Hay chen emoji vo giua cau, khong chi cuoi cau

Thong tin lop hoc can nho:
- App Lop 06: danh cho hoc sinh lop 6.
- Neu hoi ve lop khac, noi nhe rang app nay dang tap trung cho lop 6.
- Lop 7 den lop 12 hien chua mo trong he sinh thai nay.

Pham vi kien thuc: chuong trinh lop 6 (GDPT 2018) - Toan, Ngu van, Tieng Anh, KHTN, Lich su & Dia ly, Tin hoc, Cong nghe, GDCD.
Neu ban hoi chuyen ngoai: tra loi vui roi ru quay lai hoc.
KHONG BAO GIO noi minh la AI hay robot. ${persona.name} la ban than that su.`;
}

// ==================== LICENSE KEY ====================
export function getLicenseKey(): string | null {
  return getStoredLop6LicenseKey();
}

export function saveLicenseKey(key: string): void {
  window.localStorage.setItem('lop6.license.key', key);
}

const DOPI_KEY_STORAGE_KEY = 'hhk_dopi_key';

function normalizeDopiKey(input: string): string {
  return String(input || '').trim().toUpperCase().replace(/\s+/g, '');
}

export function getStoredDopiKey(): string | null {
  try {
    return window.localStorage.getItem(DOPI_KEY_STORAGE_KEY) || null;
  } catch {
    return null;
  }
}

export function saveDopiKey(key: string): void {
  try {
    const normalized = normalizeDopiKey(key);
    if (!normalized) {
      window.localStorage.removeItem(DOPI_KEY_STORAGE_KEY);
      return;
    }
    window.localStorage.setItem(DOPI_KEY_STORAGE_KEY, normalized);
  } catch {
    // ignore storage errors
  }
}

export function clearDopiKey(): void {
  try {
    window.localStorage.removeItem(DOPI_KEY_STORAGE_KEY);
  } catch {
    // ignore storage errors
  }
}

function getPreferredAiKey(): { key: string | null; type: 'dopi' | 'license' | null } {
  const dopiKey = getStoredDopiKey();
  if (dopiKey) return { key: dopiKey, type: 'dopi' };

  const licenseKey = getLicenseKey();
  if (licenseKey) return { key: licenseKey, type: 'license' };

  return { key: null, type: null };
}

function buildStoredAiHeaders(): Record<string, string> | null {
  const preferred = getPreferredAiKey();
  if (!preferred.key) return null;

  return preferred.type === 'dopi'
    ? {
        'Content-Type': 'application/json',
        'X-Dopi-Key': preferred.key,
      }
    : {
        'Content-Type': 'application/json',
        'X-License-Key': preferred.key,
      };
}

function buildDopiKeyHeaders(inputKey: string): Record<string, string> {
  return {
    'Content-Type': 'application/json',
    'X-Dopi-Key': normalizeDopiKey(inputKey),
  };
}

// ==================== CONVERSATION HISTORY ====================
interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const conversationHistory: ChatMessage[] = [];
const MAX_HISTORY = 20;

function addToHistory(role: 'user' | 'assistant', text: string): void {
  conversationHistory.push({ role, content: text });
  while (conversationHistory.length > MAX_HISTORY) {
    conversationHistory.shift();
  }
}

export function clearServerChatHistory(): void {
  conversationHistory.length = 0;
}

// ==================== AI CAPACITY (DUNG LUONG) ====================
export interface AICapacityResponse {
  ok: boolean;
  balance: number;
  transactions?: Array<{
    id: string;
    type: string;
    amount: number;
    balanceAfter: number;
    createdAt: string;
  }>;
  count?: number;
  email?: string | null;
  authType?: string | null;
  walletId?: string | null;
  error?: string;
}

export interface DopiKeyValidationResponse {
  ok: boolean;
  error?: string;
  balance?: number;
  walletId?: string | null;
  authType?: string | null;
}

/**
 * Lay so dung luong AI con lai tu server
 */
export async function getAICapacity(): Promise<AICapacityResponse> {
  const dopiKey = getStoredDopiKey();
  if (!dopiKey) {
    return { ok: false, balance: 0, error: 'Chua co Dopi key' };
  }

  try {
    const response = await fetch(`${API_BASE_URL}/ai/capacity`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Dopi-Key': dopiKey,
      },
    });

    if (response.status === 401) {
      return { ok: false, balance: 0, error: 'Dopi key khong hop le' };
    }

    if (response.status === 403) {
      return { ok: false, balance: 0, error: 'Het dung luong AI' };
    }

    if (!response.ok) {
      return { ok: false, balance: 0, error: `Loi server: ${response.status}` };
    }

    const data = await response.json();
    return {
      ok: data.ok,
      balance: data.balance || 0,
      transactions: data.transactions || [],
      count: data.count || 0,
      email: data.email || null,
      authType: data.authType || null,
      walletId: data.walletId || null,
    };
  } catch (err: any) {
    return { ok: false, balance: 0, error: err?.message || 'Loi ket noi' };
  }
}

export interface DopiRedeemResponse {
  ok: boolean;
  error?: string;
  key?: {
    id: string;
    keyMasked: string;
    amountDopi: number;
    status: string;
  };
  wallet?: {
    added: number;
    balance: number;
    walletId?: string | null;
  };
}

// ==================== CHAT API ====================
export interface ServerAIResponse {
  success: boolean;
  text: string;
  error?: string;
  balance?: {
    before: number;
    after: number;
    deducted: number;
  };
  insufficientBalance?: boolean;
}

function buildFallbackReply(studentName: string): string {
  const persona = MASCOT_PERSONAS.dopi;
  return `${persona.emoji} ${persona.name} xin loi nha, he thong AI dang ban ti. ${studentName} thu lai sau chut xiu nha! 📚`;
}

/**
 * Gui tin nhan den AI qua Server Proxy
 * - Tu dong tru dung luong
 * - Xu ly loi 403 (Het dung luong)
 */
export async function sendToServerAI(
  userMessage: string,
  themeId: string,
  studentName: string,
): Promise<ServerAIResponse> {
  const dopiKey = getStoredDopiKey();

  if (!dopiKey) {
    return {
      success: false,
      text: '',
      error: 'Ban chua nhap Dopi key. Vui long nap Dopi truoc khi dung AI.',
      insufficientBalance: false,
    };
  }

  const systemPrompt = buildSystemPrompt(themeId, studentName);
  addToHistory('user', userMessage);

  const messages = [
    { role: 'system', content: systemPrompt },
    ...conversationHistory.slice(0, -1).map(h => ({ role: h.role, content: h.content })),
    { role: 'user', content: userMessage },
  ];

  try {
    const response = await fetch(`${API_BASE_URL}/ai/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Dopi-Key': dopiKey,
      },
      body: JSON.stringify({
        messages,
        mode: 'chat',
      }),
    });

    if (response.status === 403) {
      conversationHistory.pop();
      return {
        success: false,
        text: '',
        error: 'Ban da het dung luong AI. Vui long nho bo me mua them dung luong tai hochungkhoi.site',
        insufficientBalance: true,
        balance: { before: 0, after: 0, deducted: 0 },
      };
    }

    if (response.status === 401) {
      conversationHistory.pop();
      return {
        success: false,
        text: '',
        error: 'Dopi key khong hop le. Vui long kiem tra lai trong phan Goi & key.',
        insufficientBalance: false,
      };
    }

    if (!response.ok) {
      conversationHistory.pop();
      const data = await response.json().catch(() => ({}));
      return {
        success: false,
        text: '',
        error: data.error || `Loi server: ${response.status}`,
        insufficientBalance: false,
      };
    }

    const data = await response.json();

    if (!data.ok) {
      conversationHistory.pop();
      return {
        success: false,
        text: '',
        error: data.error || 'Loi khong xac dinh tu server',
        insufficientBalance: false,
      };
    }

    const responseText = data.response?.choices?.[0]?.message?.content;

    if (!responseText) {
      conversationHistory.pop();
      const persona = MASCOT_PERSONAS[themeId] || MASCOT_PERSONAS.dopi;
      return {
        success: true,
        text: `${persona.emoji} Hmm, ${persona.name} chua tra loi duoc cau nay. ${studentName} thu hoi cach khac nhe! ${persona.name} san sang giup ban hoc bai! 📚`,
        balance: data.balance,
      };
    }

    addToHistory('assistant', responseText);

    return {
      success: true,
      text: responseText,
      balance: data.balance,
    };
  } catch (err: any) {
    conversationHistory.pop();
    const errMsg = err?.message || 'Loi ket noi';

    return {
      success: true,
      text: buildFallbackReply(studentName),
      error: `${errMsg}. Da hien thi phan hoi du phong.`,
    };
  }
}

export async function getDopiAICapacity(): Promise<AICapacityResponse> {
  const dopiKey = getStoredDopiKey();
  if (!dopiKey) {
    return { ok: false, balance: 0, error: 'Chua co Dopi key' };
  }

  try {
    const response = await fetch(`${API_BASE_URL}/ai/capacity`, {
      method: 'GET',
      headers: buildDopiKeyHeaders(dopiKey),
    });

    if (response.status === 401) {
      return { ok: false, balance: 0, error: 'Dopi key khong hop le' };
    }

    if (response.status === 403) {
      return { ok: false, balance: 0, error: 'Het dung luong AI' };
    }

    if (!response.ok) {
      return { ok: false, balance: 0, error: `Loi server: ${response.status}` };
    }

    const data = await response.json();
    return {
      ok: data.ok,
      balance: data.balance || 0,
      transactions: data.transactions || [],
      count: data.count || 0,
      email: data.email || null,
      authType: data.authType || null,
      walletId: data.walletId || null,
    };
  } catch (err: any) {
    return { ok: false, balance: 0, error: err?.message || 'Loi ket noi' };
  }
}

export async function validateAndSaveDopiKey(inputKey: string): Promise<DopiKeyValidationResponse> {
  const key = normalizeDopiKey(inputKey);

  if (!key) {
    return { ok: false, error: 'Vui long nhap Dopi key.' };
  }

  try {
    const response = await fetch(`${API_BASE_URL}/ai/capacity`, {
      method: 'GET',
      headers: buildDopiKeyHeaders(key),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.ok) {
      return {
        ok: false,
        error: data.error || (response.status === 401 ? 'Dopi key khong hop le' : `Loi server: ${response.status}`),
      };
    }

    saveDopiKey(key);
    return {
      ok: true,
      balance: Number(data.balance || 0),
      walletId: data.walletId || null,
      authType: data.authType || 'dopi',
    };
  } catch (err: any) {
    return {
      ok: false,
      error: err?.message || 'Loi ket noi khi kiem tra Dopi key.',
    };
  }
}

export async function sendToServerAIWithStoredKey(
  userMessage: string,
  themeId: string,
  studentName: string,
): Promise<ServerAIResponse> {
  const headers = buildStoredAiHeaders();

  if (!headers) {
    return {
      success: false,
      text: '',
      error: 'Ban chua nhap Dopi key.',
      insufficientBalance: false,
    };
  }

  const systemPrompt = buildSystemPrompt(themeId, studentName);
  addToHistory('user', userMessage);

  const messages = [
    { role: 'system', content: systemPrompt },
    ...conversationHistory.slice(0, -1).map(h => ({ role: h.role, content: h.content })),
    { role: 'user', content: userMessage },
  ];

  try {
    const response = await fetch(`${API_BASE_URL}/ai/chat`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        messages,
        mode: 'chat',
      }),
    });

    if (response.status === 403) {
      conversationHistory.pop();
      return {
        success: false,
        text: '',
        error: 'Ban da het dung luong AI. Vui long nho bo me mua them dung luong tai hochungkhoi.site',
        insufficientBalance: true,
        balance: { before: 0, after: 0, deducted: 0 },
      };
    }

    if (response.status === 401) {
      conversationHistory.pop();
      return {
        success: false,
        text: '',
        error: 'Dopi key khong hop le. Vui long kiem tra lai trong phan Goi & key.',
        insufficientBalance: false,
      };
    }

    if (!response.ok) {
      conversationHistory.pop();
      const data = await response.json().catch(() => ({}));
      return {
        success: false,
        text: '',
        error: data.error || `Loi server: ${response.status}`,
        insufficientBalance: false,
      };
    }

    const data = await response.json();

    if (!data.ok) {
      conversationHistory.pop();
      return {
        success: false,
        text: '',
        error: data.error || 'Loi khong xac dinh tu server',
        insufficientBalance: false,
      };
    }

    const responseText = data.response?.choices?.[0]?.message?.content;

    if (!responseText) {
      conversationHistory.pop();
      const persona = MASCOT_PERSONAS[themeId] || MASCOT_PERSONAS.dopi;
      return {
        success: true,
        text: `${persona.emoji} Hmm, ${persona.name} chua tra loi duoc cau nay. ${studentName} thu hoi cach khac nhe! ${persona.name} san sang giup ban hoc bai! 📚`,
        balance: data.balance,
      };
    }

    addToHistory('assistant', responseText);

    return {
      success: true,
      text: responseText,
      balance: data.balance,
    };
  } catch (err: any) {
    conversationHistory.pop();
    const errMsg = err?.message || 'Loi ket noi';

    return {
      success: true,
      text: buildFallbackReply(studentName),
      error: `${errMsg}. Da hien thi phan hoi du phong.`,
    };
  }
}

export { buildSystemPrompt, MASCOT_PERSONAS };
export type { ChatMessage, MascotPersona };
