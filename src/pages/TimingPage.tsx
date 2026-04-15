import { StatCard } from '../components/StatCard';
import { formatDelta, formatMs } from '../services/formatters';
import { useTelemetryStore } from '../store/useTelemetryStore';

export const TimingPage = () => {
  const snapshot = useTelemetryStore((state) => state.snapshot);

  if (!snapshot) {
    return <p className="text-slate-400">En attente de timing…</p>;
  }

  const { frame } = snapshot;

  return (
    <>
      <header>
        <h2 className="text-2xl font-semibold">Timing</h2>
        <p className="text-sm text-slate-400">Données lap, best lap, delta et session timer.</p>
      </header>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Lap Time" value={formatMs(frame.lapTimeMs)} />
        <StatCard label="Best Lap" value={formatMs(frame.bestLapMs)} />
        <StatCard label="Delta" value={formatDelta(frame.deltaMs)} />
        <StatCard label="Session Remaining" value={formatMs(frame.sessionTimeRemainingMs)} />
      </section>
    </>
  );
};
