import { ProgressBar } from '../components/ProgressBar';
import { StatCard } from '../components/StatCard';
import { SteeringGauge } from '../components/SteeringGauge';
import { formatDelta, formatMs } from '../services/formatters';
import { useTelemetryStore } from '../store/useTelemetryStore';

export const TelemetryCoreWidget = () => {
  const snapshot = useTelemetryStore((state) => state.snapshot);

  if (!snapshot) {
    return <p className="text-slate-400">En attente de télémétrie…</p>;
  }

  const { frame } = snapshot;

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatCard label="Speed" value={Math.round(frame.speedKph)} unit="km/h" />
      <StatCard label="RPM" value={Math.round(frame.rpm)} unit="rpm" />
      <StatCard label="Gear" value={frame.gear} />
      <StatCard label="Fuel" value={frame.fuelL.toFixed(1)} unit="L" />
      <StatCard label="Lap Time" value={formatMs(frame.lapTimeMs)} />
      <StatCard label="Best Lap" value={formatMs(frame.bestLapMs)} />
      <StatCard label="Delta" value={formatDelta(frame.deltaMs)} />
      <StatCard label="Session Timer" value={formatMs(frame.sessionTimeRemainingMs)} />
      <ProgressBar label="Throttle" value={frame.throttle} colorClass="bg-emerald-500" />
      <ProgressBar label="Brake" value={frame.brake} colorClass="bg-rose-500" />
      <SteeringGauge steering={frame.steering} />
    </section>
  );
};
