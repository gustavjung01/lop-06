type MathProgressPillProps = {
  label: string;
  value?: string | number;
  tone?: 'blue' | 'green' | 'amber' | 'slate';
};

const toneClass = {
  blue: 'bg-blue-50 text-blue-700 ring-blue-100',
  green: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  amber: 'bg-amber-50 text-amber-700 ring-amber-100',
  slate: 'bg-slate-100 text-slate-700 ring-slate-200',
};

export function MathProgressPill({ label, value, tone = 'slate' }: MathProgressPillProps) {
  return (
    <span className={`inline-flex max-w-full min-w-0 items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ring-1 [overflow-wrap:anywhere] ${toneClass[tone]}`}>
      {value !== undefined ? <strong>{value}</strong> : null}
      {label}
    </span>
  );
}
