/**
 * MascotChatWidget — Chat AI đơn giản cho lop-06
 * - Tích hợp Server AI Chat
 * - Hiển thị AiCapacityBar
 * - Xử lý lỗi 403 (Hết dung lượng)
 */

import { useState, useRef, useEffect, useCallback } from 'react';
import { X, Send, ExternalLink } from 'lucide-react';
import { sendToServerAIWithStoredKey, getDopiAICapacity } from '../services/serverAiChat';
import { AiCapacityBar } from './AiCapacityBar';
import { AI_CHAT_INTENT_EVENT, type AIChatIntentDetail } from '../services/aiChatIntent';

const ASSET_BASE_URL = (import.meta as any).env?.BASE_URL || '/';

interface ChatMessage {
  id: number;
  from: 'user' | 'mascot';
  text: string;
  isLoading?: boolean;
}

type MascotChatWidgetProps = {
  hideFloatingButton?: boolean;
};

export function MascotChatWidget({ hideFloatingButton = false }: MascotChatWidgetProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [sending, setSending] = useState(false);
  const [aiEnabled, setAiEnabled] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Check AI capacity when open
  useEffect(() => {
    if (open) {
      getDopiAICapacity().then(result => {
        setAiEnabled(result.ok && result.balance > 0);
        if (messages.length === 0) {
          setMessages([{
            id: Date.now(),
            from: 'mascot',
            text: '🐬 Ê! Mình là Dopi đây! Hỏi mình bất cứ điều gì về bài học nhé!',
          }]);
        }
      });
    }
  }, [open, messages.length]);

  // Auto scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const sendMessageText = useCallback(async (rawText: string) => {
    const text = rawText.trim();
    if (!text || sending) return;

    setInputText('');
    setSending(true);

    const userMsgId = Date.now();
    setMessages(prev => [...prev, { id: userMsgId, from: 'user', text }]);

    const loadingId = Date.now() + 1;
    setMessages(prev => [...prev, { id: loadingId, from: 'mascot', text: '', isLoading: true }]);

    const studentName = localStorage.getItem('lop6.student.name') || 'Bạn';

    try {
      const resp = await sendToServerAIWithStoredKey(text, 'dopi', studentName);

      setMessages(prev => prev.map(m => {
        if (m.id === loadingId) {
          return {
            ...m,
            text: resp.success ? resp.text : `😢 ${resp.error || 'Lỗi rồi, thử lại nhé!'}`,
            isLoading: false,
          };
        }
        return m;
      }));

      if (!resp.success && resp.insufficientBalance) {
        setAiEnabled(false);
      }
    } catch (err: any) {
      setMessages(prev => prev.map(m => {
        if (m.id === loadingId) {
          return { ...m, text: '😅 Lỗi kết nối! Thử lại sau nhé!', isLoading: false };
        }
        return m;
      }));
    } finally {
      setSending(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [sending]);

  const sendMessage = async () => {
    await sendMessageText(inputText);
  };

  useEffect(() => {
    const handleIntent = (event: Event) => {
      const detail = (event as CustomEvent<AIChatIntentDetail>).detail;
      if (!detail?.prompt) return;
      setOpen(true);
      setInputText(detail.prompt);
      if (detail.autoSend) {
        setTimeout(() => {
          void sendMessageText(detail.prompt || '');
        }, 260);
      }
    };

    window.addEventListener(AI_CHAT_INTENT_EVENT, handleIntent as EventListener);
    return () => window.removeEventListener(AI_CHAT_INTENT_EVENT, handleIntent as EventListener);
  }, [sendMessageText]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!open && !hideFloatingButton && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-blue-100 p-1.5 shadow-xl shadow-blue-300/70 ring-2 ring-white transition-all hover:scale-110 hover:shadow-2xl"
          aria-label="Mở chat với Dopi"
          title="Chat với Dopi"
        >
          <img
            src={`${ASSET_BASE_URL}dopi-avatar.png`}
            alt="Dopi"
            className="h-full w-full object-contain drop-shadow-[0_10px_14px_rgba(37,99,235,0.28)]"
          />
        </button>
      )}

      {/* Chat Panel */}
      {open && (
        <div className="fixed inset-x-3 bottom-3 z-50 max-h-[85dvh] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl animate-in slide-in-from-bottom-10 duration-200 sm:inset-x-auto sm:bottom-4 sm:right-4 sm:w-96">
          {/* Header */}
          <div className="flex items-start justify-between gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 p-3 sm:p-4">
            <div className="flex min-w-0 items-center gap-2">
              <img
                src={`${ASSET_BASE_URL}dopi-avatar.png`}
                alt="Dopi"
                className="h-10 w-10 shrink-0 rounded-2xl bg-white/90 object-contain p-1 shadow-sm"
              />
              <div className="min-w-0">
                <div className="font-bold text-white">Dopi</div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-white/80">
                  <span>Chat với Mascot</span>
                  <AiCapacityBar showTooltip={false} refreshInterval={60_000} />
                  <button
                    type="button"
                    onClick={() => window.dispatchEvent(new CustomEvent('hhk:dopi-key-popup-open'))}
                    className="inline-flex items-center gap-1 rounded-full border border-white/30 bg-white/15 px-2 py-0.5 text-[10px] font-semibold text-white hover:bg-white/25"
                  >
                    <span>Mua AI</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 active:scale-95"
              aria-label="Đóng chat Dopi"
              title="Đóng"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="h-[52dvh] max-h-80 overflow-y-auto space-y-3 bg-gray-50 p-4">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                    msg.from === 'user'
                      ? 'bg-blue-500 text-white rounded-br-md'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md'
                  }`}
                >
                  {msg.isLoading ? (
                    <div className="flex gap-1">
                      <span className="animate-bounce">●</span>
                      <span className="animate-bounce delay-100">●</span>
                      <span className="animate-bounce delay-200">●</span>
                    </div>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 bg-white p-3">
            {!aiEnabled && (
              <div className="mb-2 text-center text-xs text-red-500">
                ⚠️ Dung lượng AI đã hết! Nhờ bố mẹ mua thêm nhé!
              </div>
            )}
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={aiEnabled ? "Hỏi Dopi điều gì đó..." : "Dung lượng đã hết..."}
                disabled={sending || !aiEnabled}
                className="min-w-0 flex-1 rounded-xl border border-gray-200 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={sending || !inputText.trim() || !aiEnabled}
                className="rounded-xl bg-blue-500 px-3 py-2 text-white transition hover:bg-blue-600 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MascotChatWidget;
