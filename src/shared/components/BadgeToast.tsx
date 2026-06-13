import { Award, Sparkles } from 'lucide-react';

type BadgeToastProps = {
  title: string;
  description: string;
};

export function BadgeToast({ title, description }: BadgeToastProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
        <Award className="h-5 w-5" />
        <Sparkles className="absolute -right-1 -top-1 h-3.5 w-3.5 text-blue-600" />
      </div>
      <div>
        <p className="text-sm font-black text-slate-950">{title}</p>
        <p className="mt-0.5 text-xs font-semibold leading-5 text-slate-600">{description}</p>
      </div>
    </div>
  );
}
