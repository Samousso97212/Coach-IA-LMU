import { useEffect } from 'react';
import { MockTelemetryProvider } from '../services/mockTelemetryProvider';
import { useTelemetryStore } from '../store/useTelemetryStore';

export const useTelemetry = () => {
  const setSnapshot = useTelemetryStore((state) => state.setSnapshot);

  useEffect(() => {
    const provider = new MockTelemetryProvider();
    provider.start(setSnapshot);
    return () => provider.stop();
  }, [setSnapshot]);
};
