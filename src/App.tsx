import { Navigate, Route, Routes } from 'react-router-dom';
import { useTelemetry } from './hooks/useTelemetry';
import { AppLayout } from './layout/AppLayout';
import { OverviewPage } from './pages/OverviewPage';
import { RelativePage } from './pages/RelativePage';
import { SettingsPage } from './pages/SettingsPage';
import { TelemetryPage } from './pages/TelemetryPage';
import { TimingPage } from './pages/TimingPage';
import { VirtualCoachPage } from './pages/VirtualCoachPage';

export const App = () => {
  useTelemetry();

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/telemetry" element={<TelemetryPage />} />
        <Route path="/timing" element={<TimingPage />} />
        <Route path="/relative" element={<RelativePage />} />
        <Route path="/coach" element={<VirtualCoachPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
