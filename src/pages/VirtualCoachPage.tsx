import { CoachFeedWidget } from '../widgets/CoachFeedWidget';

export const VirtualCoachPage = () => (
  <>
    <header>
      <h2 className="text-2xl font-semibold">Virtual Coach</h2>
      <p className="text-sm text-slate-400">Analyse rules engine + alertes visuelles et vocales.</p>
    </header>
    <CoachFeedWidget />
  </>
);
