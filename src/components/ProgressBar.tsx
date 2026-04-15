interface ProgressBarProps {
  label: string;
  value: number;
  colorClass: string;
}

export const ProgressBar = ({ label, value, colorClass }: ProgressBarProps) => (
  <div className="rounded-xl bg-slate-900/80 p-4 shadow-panel">
    <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
      <span>{label}</span>
      <span>{Math.round(value * 100)}%</span>
    </div>
    <div className="h-3 overflow-hidden rounded bg-slate-800">
      <div className={`h-full rounded transition-all ${colorClass}`} style={{ width: `${Math.max(0, Math.min(value, 1)) * 100}%` }} />
    </div>
  </div>
);
