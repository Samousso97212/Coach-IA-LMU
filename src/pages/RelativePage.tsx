import { RelativeTableWidget } from '../widgets/RelativeTableWidget';

export const RelativePage = () => (
  <>
    <header>
      <h2 className="text-2xl font-semibold">Relative / Opponents</h2>
      <p className="text-sm text-slate-400">Suivi des écarts temps réels des voitures proches.</p>
    </header>
    <RelativeTableWidget />
  </>
);
