import { useTelemetryStore } from '../store/useTelemetryStore';

export const SettingsPage = () => {
  const settings = useTelemetryStore((state) => state.settings);
  const updateSettings = useTelemetryStore((state) => state.updateSettings);

  return (
    <>
      <header>
        <h2 className="text-2xl font-semibold">Settings</h2>
        <p className="text-sm text-slate-400">Personnalisation coach audio et sensibilité.</p>
      </header>

      <section className="space-y-4 rounded-xl bg-slate-900/80 p-4 shadow-panel">
        <label className="flex items-center justify-between">
          <span>Activer voix du coach</span>
          <input
            type="checkbox"
            checked={settings.voiceEnabled}
            onChange={(event) => updateSettings({ voiceEnabled: event.target.checked })}
          />
        </label>

        <label className="grid gap-2">
          <span>Voice rate: {settings.voiceRate.toFixed(1)}</span>
          <input
            type="range"
            min={0.7}
            max={1.3}
            step={0.1}
            value={settings.voiceRate}
            onChange={(event) => updateSettings({ voiceRate: Number(event.target.value) })}
          />
        </label>

        <label className="grid gap-2">
          <span>Voice pitch: {settings.voicePitch.toFixed(1)}</span>
          <input
            type="range"
            min={0.7}
            max={1.3}
            step={0.1}
            value={settings.voicePitch}
            onChange={(event) => updateSettings({ voicePitch: Number(event.target.value) })}
          />
        </label>

        <label className="grid gap-2">
          <span>Sensibilité coach</span>
          <select
            className="rounded bg-slate-800 p-2"
            value={settings.coachSensitivity}
            onChange={(event) =>
              updateSettings({
                coachSensitivity: event.target.value as 'conservative' | 'balanced' | 'aggressive',
              })
            }
          >
            <option value="conservative">Conservative</option>
            <option value="balanced">Balanced</option>
            <option value="aggressive">Aggressive</option>
          </select>
        </label>
      </section>
    </>
  );
};
