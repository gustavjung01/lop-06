export const AI_CHAT_INTENT_EVENT = 'hhk-ai-chat-intent';

export interface AIChatIntentDetail {
  prompt?: string;
  displayText?: string;
  autoSend?: boolean;
}

export function openAIChatIntent(detail: AIChatIntentDetail): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent<AIChatIntentDetail>(AI_CHAT_INTENT_EVENT, { detail }));
}
