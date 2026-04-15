import { CoachFeedWidget } from '../widgets/CoachFeedWidget';
import { RelativeTableWidget } from '../widgets/RelativeTableWidget';
import { TelemetryCoreWidget } from '../widgets/TelemetryCoreWidget';

export const OverviewPage = () => (
  <>
    <header>
      <h2 className="text-2xl font-semibold">Overview Dashboard</h2>
      <p className="text-sm text-slate-400">Vision globale session, performance et coaching.</p>
    </header>
    <TelemetryCoreWidget />
    <div className="grid gap-4 xl:grid-cols-2">
      <RelativeTableWidget />
      <CoachFeedWidget />
    </div>
  </>
);
