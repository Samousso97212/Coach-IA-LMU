import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Overview' },
  { to: '/telemetry', label: 'Telemetry' },
  { to: '/timing', label: 'Timing' },
  { to: '/relative', label: 'Relative' },
  { to: '/coach', label: 'Virtual Coach' },
  { to: '/settings', label: 'Settings' },
];

export const AppLayout = () => (
  <div className="mx-auto grid min-h-screen max-w-[1440px] gap-6 px-4 py-6 lg:grid-cols-[220px_1fr]">
    <aside className="rounded-2xl bg-slate-900/80 p-4 shadow-panel">
      <h1 className="mb-4 text-xl font-bold">Coach IA LMU</h1>
      <nav className="space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `block rounded px-3 py-2 text-sm transition ${
                isActive ? 'bg-accent-500/20 text-accent-500' : 'text-slate-300 hover:bg-slate-800'
              }`
            }
            end={item.to === '/'}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>

    <main className="space-y-6">
      <Outlet />
    </main>
  </div>
);
