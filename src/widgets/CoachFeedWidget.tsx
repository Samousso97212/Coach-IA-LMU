import { useTelemetryStore } from '../store/useTelemetryStore';

const levelClasses = {
  info: 'border-sky-500/30 bg-sky-500/10',
  warning: 'border-rose-500/30 bg-rose-500/10',
  positive: 'border-emerald-500/30 bg-emerald-500/10',
};

export const CoachFeedWidget = () => {
  const messages = useTelemetryStore((state) => state.coachMessages);

  return (
    <section className="rounded-xl bg-slate-900/80 p-4 shadow-panel">
      <h3 className="text-lg font-semibold">Virtual Coach Feed</h3>
      <ul className="mt-3 space-y-2">
        {messages.length === 0 ? <li className="text-sm text-slate-400">Aucun message pour le moment.</li> : null}
        {messages.map((message) => (
          <li key={message.id} className={`rounded-lg border p-3 text-sm ${levelClasses[message.level]}`}>
            {message.text}
          </li>
        ))}
      </ul>
    </section>
  );
};
