import { BASE_RELATIVES, SESSION_LENGTH_MS, TRACK_LENGTH_METERS } from '../data/mock/constants';
import type { RelativeCar, SessionSnapshot, TelemetryProvider } from '../types/telemetry';

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const jitter = (spread: number) => (Math.random() * 2 - 1) * spread;

export class MockTelemetryProvider implements TelemetryProvider {
  private timerId?: number;

  private tick = 0;

  private lapMs = 0;

  private bestLapMs = 208_000;

  private fuelL = 92;

  private sessionRemainingMs = SESSION_LENGTH_MS;

  start(onData: (snapshot: SessionSnapshot) => void): void {
    this.stop();
    this.timerId = window.setInterval(() => {
      this.tick += 1;
      const dt = 200;
      this.lapMs += dt;
      this.sessionRemainingMs = clamp(this.sessionRemainingMs - dt, 0, SESSION_LENGTH_MS);
      this.fuelL = clamp(this.fuelL - 0.006, 0, 120);

      const normalizedLap = (this.lapMs % 210_000) / 210_000;
      const speedBase = 245 + Math.sin(normalizedLap * Math.PI * 8) * 52;
      const brakingZone = Math.max(0, Math.sin(normalizedLap * Math.PI * 16) * -1);

      const speedKph = clamp(speedBase - brakingZone * 140 + jitter(3), 72, 335);
      const throttle = clamp(0.65 + Math.sin(normalizedLap * Math.PI * 10) * 0.35 - brakingZone * 0.7 + jitter(0.08), 0, 1);
      const brake = clamp(brakingZone * 0.95 + jitter(0.06), 0, 1);
      const steering = clamp(Math.sin(normalizedLap * Math.PI * 18) * 0.78 + jitter(0.04), -1, 1);
      const rpm = clamp(4300 + speedKph * 27 + jitter(120), 3200, 9200);
      const deltaMs = Math.round((Math.sin(this.tick / 32) + jitter(0.3)) * 420);
      const sector = ((Math.floor((normalizedLap * TRACK_LENGTH_METERS) / (TRACK_LENGTH_METERS / 3)) + 1) as 1 | 2 | 3);
      const gear = clamp(Math.floor(speedKph / 42), 1, 8);

      if (this.lapMs > 210_000) {
        const completedLap = this.lapMs;
        this.bestLapMs = Math.min(this.bestLapMs, completedLap);
        this.lapMs = 0;
      }

      const relatives: RelativeCar[] = BASE_RELATIVES.map((car, index) => ({
        ...car,
        gapMs: Math.round(car.gapMs + Math.sin((this.tick + index * 7) / 25) * 130 + jitter(20)),
      }));

      onData({
        phase: 'race',
        frame: {
          timestamp: Date.now(),
          speedKph,
          rpm,
          throttle,
          brake,
          steering,
          gear,
          lapTimeMs: this.lapMs,
          bestLapMs: this.bestLapMs,
          deltaMs,
          fuelL: this.fuelL,
          sessionTimeRemainingMs: this.sessionRemainingMs,
          sector,
        },
        relatives,
      });
    }, 200);
  }

  stop(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
      this.timerId = undefined;
    }
  }
}
