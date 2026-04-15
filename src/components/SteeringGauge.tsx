interface SteeringGaugeProps {
  steering: number;
}

export const SteeringGauge = ({ steering }: SteeringGaugeProps) => (
  <div className="rounded-xl bg-slate-900/80 p-4 shadow-panel">
    <p className="text-xs uppercase tracking-wide text-slate-400">Steering</p>
    <div className="mt-6 h-2 rounded bg-slate-800">
      <div className="relative h-2">
        <div
          className="absolute -top-1 h-4 w-4 -translate-x-1/2 rounded-full bg-accent-500"
          style={{ left: `${((steering + 1) / 2) * 100}%` }}
        />
      </div>
    </div>
    <p className="mt-3 text-sm text-slate-300">{steering.toFixed(2)}</p>
  </div>
);
