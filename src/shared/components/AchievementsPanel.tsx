import { Award, BookOpen, CalendarDays, CheckCircle2, LockKeyhole, RotateCcw, ShieldCheck, Sparkles, Target, Trophy } from 'lucide-react';
import { useMemo } from 'react';

import type { BadgeDefinition, BadgeHistoryItem, BadgeWithState } from '../hooks/useBadges';
import { getBadgeSnapshot } from '../hooks/useBadges';

type AchievementsPanelProps = {
  onBackToDashboard: () => void;
};

const badgeIconMap = {
  award: Award,
  book: BookOpen,
  calendar: CalendarDays,
  shield: ShieldCheck,
  sparkles: Sparkles,
  target: Target,
};

function formatBadgeTime(value: string | null) {
  if (!value) return 'Đã mở';

  try {
    return new Intl.DateTimeFormat('vi-VN', {
      dateStyle: 'short',
      timeStyle: 'short',
    }).format(new Date(value));
  } catch {
    return 'Đã mở';
  }
}

function getBadgeIcon(icon: BadgeDefinition['icon']) {
  return badgeIconMap[icon as keyof typeof badgeIconMap] ?? Award;
}

function BadgeCard({
  badge,
  isLocked = false,
}: {
  badge: BadgeDefinition | BadgeWithState;
  isLocked?: boolean;
}) {
  const Icon = getBadgeIcon(badge.icon);
  const unlockedAt = 'unlockedAt' in badge ? badge.unlockedAt : null;

  return (
    <article className={`app-card rounded-3xl border p-4 shadow-sm ${isLocked ? 'opacity-80' : ''}`}>
      <div className="flex items-start gap-3">
        <div className={`app-soft app-accent-text flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${isLocked ? 'grayscale' : ''}`}>
          {isLocked ? <LockKeyhole className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-black text-slate-950">{badge.title}</h3>
            <span className="app-chip rounded-full border px-2 py-0.5 text-[11px] font-bold">{badge.subject}</span>
          </div>
          <p className="mt-1 text-xs font-semibold leading-5 text-slate-600">{badge.description}</p>
          <p className="app-muted-text mt-2 text-[11px] font-bold">{badge.category}</p>
          {isLocked ? (
            <p className="mt-2 text-xs font-semibold leading-5 text-slate-600">{badge.conditionText}</p>
          ) : (
            <p className="mt-2 text-xs font-black text-emerald-700">{formatBadgeTime(unlockedAt)}</p>
          )}
        </div>
      </div>
    </article>
  );
}

function HistoryRow({ item }: { item: BadgeHistoryItem }) {
  return (
    <li className="app-soft rounded-2xl p-3">
      <div className="flex items-start gap-3">
        <div className="app-accent-text mt-0.5">
          <CheckCircle2 className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-black text-slate-950">{item.title}</p>
          <p className="app-muted-text mt-1 text-xs font-semibold">
            {formatBadgeTime(item.unlockedAt)} · {item.source}
          </p>
        </div>
      </div>
    </li>
  );
}

export function AchievementsPanel({ onBackToDashboard }: AchievementsPanelProps) {
  const snapshot = useMemo(() => getBadgeSnapshot(), []);
  const nextGoal = snapshot.lockedBadges[0]?.conditionText ?? 'Em đã mở hết huy hiệu hiện có.';

  return (
    <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <button
          type="button"
          onClick={onBackToDashboard}
          className="app-secondary mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-black shadow-sm transition hover:-translate-y-0.5 active:translate-y-0"
        >
          <RotateCcw className="h-4 w-4" />
          Quay lại dashboard
        </button>

        <div className="app-surface rounded-[2rem] border p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="app-chip inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-black">
                <Trophy className="h-4 w-4" />
                Thành tích Lớp 6
              </div>
              <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Huy hiệu của em</h1>
              <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-slate-600">
                Mỗi huy hiệu là một dấu mốc nhỏ trong quá trình học. Cứ học đều, phần này sẽ đầy dần lên.
              </p>
            </div>
            <div className="app-soft rounded-3xl p-4 lg:min-w-64">
              <p className="app-muted-text text-xs font-black uppercase tracking-wide">Hoàn thành</p>
              <p className="mt-1 text-3xl font-black text-slate-950">
                {snapshot.totalUnlocked}/{snapshot.totalBadges}
              </p>
              <div className="app-progress-track mt-3 h-2 rounded-full">
                <div className="app-progress-bar h-2 rounded-full" style={{ width: `${snapshot.percentComplete}%` }} />
              </div>
              <p className="app-muted-text mt-2 text-xs font-bold">{snapshot.percentComplete}% bộ huy hiệu</p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="app-soft rounded-3xl p-4">
              <p className="app-muted-text text-xs font-black uppercase tracking-wide">Đã mở</p>
              <p className="mt-1 text-2xl font-black text-slate-950">{snapshot.totalUnlocked}</p>
            </div>
            <div className="app-soft rounded-3xl p-4">
              <p className="app-muted-text text-xs font-black uppercase tracking-wide">Mới nhất</p>
              <p className="mt-1 text-sm font-black text-slate-950">
                {snapshot.latestBadge ? snapshot.latestBadge.title : 'Chưa có huy hiệu'}
              </p>
            </div>
            <div className="app-soft rounded-3xl p-4">
              <p className="app-muted-text text-xs font-black uppercase tracking-wide">Mục tiêu tiếp theo</p>
              <p className="mt-1 text-sm font-black leading-5 text-slate-950">{nextGoal}</p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-5">
            <section>
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-xl font-black text-slate-950">Huy hiệu đã mở</h2>
                <span className="app-chip rounded-full border px-3 py-1 text-xs font-black">{snapshot.unlockedBadges.length}</span>
              </div>
              {snapshot.unlockedBadges.length > 0 ? (
                <div className="grid gap-3 md:grid-cols-2">
                  {snapshot.unlockedBadges.map((badge) => (
                    <BadgeCard key={badge.id} badge={badge} />
                  ))}
                </div>
              ) : (
                <div className="app-card rounded-3xl border p-5 text-sm font-semibold text-slate-600">
                  Chưa có huy hiệu nào. Học một bài đầu tiên để mở khóa nhé.
                </div>
              )}
            </section>

            <section>
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-xl font-black text-slate-950">Huy hiệu chưa mở</h2>
                <span className="app-chip rounded-full border px-3 py-1 text-xs font-black">{snapshot.lockedBadges.length}</span>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {snapshot.lockedBadges.map((badge) => (
                  <BadgeCard key={badge.id} badge={badge} isLocked />
                ))}
              </div>
            </section>
          </div>

          <aside className="app-surface h-fit rounded-[2rem] border p-4 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">Lịch sử badge</h2>
            {snapshot.history.length > 0 ? (
              <ol className="mt-3 space-y-2">
                {snapshot.history.map((item) => (
                  <HistoryRow key={`${item.badgeId}-${item.unlockedAt ?? 'legacy'}`} item={item} />
                ))}
              </ol>
            ) : (
              <div className="app-soft mt-3 rounded-3xl p-5 text-sm font-semibold leading-6 text-slate-600">
                Chưa có huy hiệu nào. Học một bài đầu tiên để mở khóa nhé.
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
