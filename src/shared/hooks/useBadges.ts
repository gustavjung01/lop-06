import { useCallback } from 'react';

import { useToast } from '../components/ToastProvider';
import { playSoundEvent } from './useSound';

export type BadgeId =
  | 'math_today'
  | 'math_5_correct'
  | 'math_first_lesson_done'
  | 'math_10_correct'
  | 'math_3_lessons_done'
  | 'first_wrong_review';

type LegacyBadgeId = 'math-first-lesson' | 'math-5-correct' | 'math-study-today';

export type BadgeUnlockId = BadgeId | LegacyBadgeId;

export type BadgeDefinition = {
  id: BadgeId;
  title: string;
  description: string;
  icon: string;
  subject: string;
  category: string;
  conditionText: string;
  source: string;
};

export type BadgeHistoryItem = {
  badgeId: BadgeId;
  title: string;
  unlockedAt: string | null;
  source: string;
};

export type BadgeWithState = BadgeDefinition & {
  unlockedAt: string | null;
  source: string;
};

export type BadgeSnapshot = {
  definitions: BadgeDefinition[];
  unlockedBadges: BadgeWithState[];
  lockedBadges: BadgeDefinition[];
  history: BadgeHistoryItem[];
  totalUnlocked: number;
  totalBadges: number;
  percentComplete: number;
  latestBadge: BadgeHistoryItem | null;
};

export const BADGE_DEFINITIONS: BadgeDefinition[] = [
  {
    id: 'math_today',
    title: 'Học Toán hôm nay',
    description: 'Một phiên học Toán trong ngày đã bắt đầu.',
    icon: 'calendar',
    subject: 'Toán',
    category: 'Thói quen học',
    conditionText: 'Mở khi bắt đầu học/luyện Toán trong ngày',
    source: 'Math Practice',
  },
  {
    id: 'math_5_correct',
    title: 'Đúng 5 câu Toán',
    description: 'Năm câu đúng đầu tiên đã được ghi nhận.',
    icon: 'target',
    subject: 'Toán',
    category: 'Luyện tập',
    conditionText: 'Mở khi trả lời đúng 5 câu Toán',
    source: 'Math Practice',
  },
  {
    id: 'math_first_lesson_done',
    title: 'Hoàn thành bài Toán đầu tiên',
    description: 'Em đã đi hết một lượt luyện tập Toán.',
    icon: 'award',
    subject: 'Toán',
    category: 'Hoàn thành bài',
    conditionText: 'Mở khi hoàn thành bài Toán đầu tiên',
    source: 'Math Practice',
  },
  {
    id: 'math_10_correct',
    title: 'Đúng 10 câu Toán',
    description: 'Một cột mốc luyện tập nhỏ nhưng rất đáng vui.',
    icon: 'sparkles',
    subject: 'Toán',
    category: 'Luyện tập',
    conditionText: 'Mở khi trả lời đúng 10 câu Toán',
    source: 'Math Practice',
  },
  {
    id: 'math_3_lessons_done',
    title: 'Hoàn thành 3 bài Toán',
    description: 'Em đang xây nhịp học đều qua từng bài.',
    icon: 'book',
    subject: 'Toán',
    category: 'Hoàn thành bài',
    conditionText: 'Mở khi hoàn thành 3 bài Toán',
    source: 'Math Practice',
  },
  {
    id: 'first_wrong_review',
    title: 'Dũng cảm sửa sai',
    description: 'Biết quay lại sửa lỗi là một kỹ năng học rất tốt.',
    icon: 'shield',
    subject: 'Toán',
    category: 'Ôn lỗi',
    conditionText: 'Ôn lại một câu từng trả lời sai',
    source: 'Review',
  },
];

export const UNLOCKED_BADGES_KEY = 'lop6.badges.unlocked';
export const BADGE_HISTORY_KEY = 'lop6.badges.history';
export const MATH_CORRECT_COUNT_KEY = 'lop6.badges.mathCorrectCount';
export const MATH_STUDY_DATE_KEY = 'lop6.badges.mathStudyDate';

const legacyBadgeMap: Record<LegacyBadgeId, BadgeId> = {
  'math-first-lesson': 'math_first_lesson_done',
  'math-5-correct': 'math_5_correct',
  'math-study-today': 'math_today',
};

function normalizeBadgeId(id: BadgeUnlockId | string): BadgeId | null {
  if (id in legacyBadgeMap) {
    return legacyBadgeMap[id as LegacyBadgeId];
  }

  return BADGE_DEFINITIONS.some((badge) => badge.id === id) ? (id as BadgeId) : null;
}

function readJsonArray<T>(key: string): T[] {
  if (typeof window === 'undefined') return [];

  try {
    const raw = window.localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function readUnlockedIds(): BadgeId[] {
  const rawIds = readJsonArray<string>(UNLOCKED_BADGES_KEY);
  const normalized = rawIds
    .map((id) => normalizeBadgeId(id))
    .filter((id): id is BadgeId => Boolean(id));
  return [...new Set(normalized)];
}

function writeUnlockedIds(ids: BadgeId[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(UNLOCKED_BADGES_KEY, JSON.stringify([...new Set(ids)]));
}

function readHistory(): BadgeHistoryItem[] {
  return readJsonArray<Partial<BadgeHistoryItem>>(BADGE_HISTORY_KEY)
    .map((item) => {
      const badgeId = normalizeBadgeId(String(item.badgeId ?? ''));
      const badge = badgeId ? BADGE_DEFINITIONS.find((entry) => entry.id === badgeId) : undefined;
      if (!badge) return null;

      return {
        badgeId,
        title: typeof item.title === 'string' ? item.title : badge.title,
        unlockedAt: typeof item.unlockedAt === 'string' ? item.unlockedAt : null,
        source: typeof item.source === 'string' ? item.source : badge.source,
      };
    })
    .filter((item): item is BadgeHistoryItem => Boolean(item));
}

function writeHistory(history: BadgeHistoryItem[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(BADGE_HISTORY_KEY, JSON.stringify(history));
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

export function getBadgeSnapshot(): BadgeSnapshot {
  const unlockedIds = readUnlockedIds();
  writeUnlockedIds(unlockedIds);

  const storedHistory = readHistory();
  const historyByBadge = new Map(storedHistory.map((item) => [item.badgeId, item]));
  const missingHistory: BadgeHistoryItem[] = unlockedIds
    .filter((id) => !historyByBadge.has(id))
    .map((id): BadgeHistoryItem | null => {
      const badge = BADGE_DEFINITIONS.find((entry) => entry.id === id);
      if (!badge) return null;

      return {
        badgeId: badge.id,
        title: badge.title,
        unlockedAt: null,
        source: badge.source,
      };
    })
    .filter((item): item is BadgeHistoryItem => Boolean(item));

  const history = [...storedHistory, ...missingHistory].sort((left, right) => {
    if (!left.unlockedAt && !right.unlockedAt) return 0;
    if (!left.unlockedAt) return 1;
    if (!right.unlockedAt) return -1;
    return new Date(right.unlockedAt).getTime() - new Date(left.unlockedAt).getTime();
  });

  const unlockedSet = new Set(unlockedIds);
  const unlockedBadges = BADGE_DEFINITIONS.filter((badge) => unlockedSet.has(badge.id)).map((badge) => {
    const historyItem = history.find((item) => item.badgeId === badge.id);
    return {
      ...badge,
      unlockedAt: historyItem?.unlockedAt ?? null,
      source: historyItem?.source ?? badge.source,
    };
  });
  const lockedBadges = BADGE_DEFINITIONS.filter((badge) => !unlockedSet.has(badge.id));
  const totalBadges = BADGE_DEFINITIONS.length;
  const totalUnlocked = unlockedBadges.length;

  return {
    definitions: BADGE_DEFINITIONS,
    unlockedBadges,
    lockedBadges,
    history,
    totalUnlocked,
    totalBadges,
    percentComplete: totalBadges > 0 ? Math.round((totalUnlocked / totalBadges) * 100) : 0,
    latestBadge: history[0] ?? null,
  };
}

export function useBadges() {
  const toast = useToast();

  const unlockBadge = useCallback(
    (id: BadgeUnlockId, source = 'Math Practice') => {
      if (typeof window === 'undefined') return false;

      const normalizedId = normalizeBadgeId(id);
      const badge = BADGE_DEFINITIONS.find((entry) => entry.id === normalizedId);
      if (!normalizedId || !badge) return false;

      const unlocked = new Set(readUnlockedIds());

      if (unlocked.has(normalizedId)) {
        return false;
      }

      unlocked.add(normalizedId);
      writeUnlockedIds([...unlocked]);
      writeHistory([
        {
          badgeId: normalizedId,
          title: badge.title,
          unlockedAt: new Date().toISOString(),
          source,
        },
        ...readHistory().filter((item) => item.badgeId !== normalizedId),
      ]);
      window.setTimeout(() => {
        void playSoundEvent('badge_unlock');
      }, 120);
      toast.badge(badge.title, badge.description);
      return true;
    },
    [toast],
  );

  const incrementMathCorrect = useCallback(() => {
    if (typeof window === 'undefined') return 0;

    const current = Number(window.localStorage.getItem(MATH_CORRECT_COUNT_KEY) ?? '0');
    const next = Number.isFinite(current) ? current + 1 : 1;
    window.localStorage.setItem(MATH_CORRECT_COUNT_KEY, String(next));

    if (next >= 5) {
      unlockBadge('math_5_correct', 'Math Practice');
    }

    return next;
  }, [unlockBadge]);

  const markMathStudyToday = useCallback(() => {
    if (typeof window === 'undefined') return false;

    const today = getTodayKey();
    const lastDate = window.localStorage.getItem(MATH_STUDY_DATE_KEY);
    window.localStorage.setItem(MATH_STUDY_DATE_KEY, today);

    if (lastDate === today) {
      return false;
    }

    return unlockBadge('math_today', 'Math Practice');
  }, [unlockBadge]);

  return {
    badges: BADGE_DEFINITIONS,
    getSnapshot: getBadgeSnapshot,
    incrementMathCorrect,
    markMathStudyToday,
    unlockBadge,
  };
}
