import type { TelemetryProvider } from '../types/telemetry';

/**
 * Factory to switch between current mock provider and future live LMU provider.
 */
export const createTelemetryProvider = (mode: 'mock' | 'live'): TelemetryProvider => {
  if (mode === 'live') {
    return {
      start: () => {
        // Placeholder for future Le Mans Ultimate integration (UDP/SDK bridge).
        console.info('[telemetry] live provider not implemented yet, fallback to mock.');
      },
      stop: () => undefined,
    };
  }

  throw new Error('Use mockTelemetryProvider directly for now.');
};
