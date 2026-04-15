import { useTelemetryStore } from '../store/useTelemetryStore';

export const RelativeTableWidget = () => {
  const snapshot = useTelemetryStore((state) => state.snapshot);

  if (!snapshot) {
    return null;
  }

  return (
    <section className="rounded-xl bg-slate-900/80 p-4 shadow-panel">
      <h3 className="text-lg font-semibold">Relative / Opponents</h3>
      <div className="mt-3 overflow-hidden rounded-lg border border-slate-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-800/70 text-slate-300">
            <tr>
              <th className="px-3 py-2">Pos</th>
              <th className="px-3 py-2">Driver</th>
              <th className="px-3 py-2">Class</th>
              <th className="px-3 py-2">Gap</th>
            </tr>
          </thead>
          <tbody>
            {snapshot.relatives.map((car) => (
              <tr key={car.id} className={car.driverName === 'You' ? 'bg-accent-600/15' : 'bg-slate-900'}>
                <td className="px-3 py-2">{car.position}</td>
                <td className="px-3 py-2">{car.driverName}</td>
                <td className="px-3 py-2">{car.className}</td>
                <td className="px-3 py-2">{(car.gapMs / 1000).toFixed(3)}s</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
