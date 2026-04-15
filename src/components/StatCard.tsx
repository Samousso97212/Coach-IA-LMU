import type { ReactNode } from 'react';

interface StatCardProps {
  label: string;
  value: ReactNode;
  unit?: string;
}

export const StatCard = ({ label, value, unit }: StatCardProps) => (
  <article className="rounded-xl bg-slate-900/80 p-4 shadow-panel">
    <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
    <div className="mt-2 flex items-baseline gap-2">
      <span className="text-3xl font-semibold text-white">{value}</span>
      {unit ? <span className="text-sm text-slate-400">{unit}</span> : null}
    </div>
  </article>
);
