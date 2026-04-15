import { TelemetryCoreWidget } from '../widgets/TelemetryCoreWidget';

export const TelemetryPage = () => (
  <>
    <header>
      <h2 className="text-2xl font-semibold">Telemetry</h2>
      <p className="text-sm text-slate-400">Signaux dynamiques vitesse, RPM, pédales et direction.</p>
    </header>
    <TelemetryCoreWidget />
  </>
);
