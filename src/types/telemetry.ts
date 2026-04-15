export type SessionPhase = 'practice' | 'qualifying' | 'race';

export interface TelemetryFrame {
  timestamp: number;
  speedKph: number;
  rpm: number;
  throttle: number;
  brake: number;
  steering: number;
  gear: number;
  lapTimeMs: number;
  bestLapMs: number;
  deltaMs: number;
  fuelL: number;
  sessionTimeRemainingMs: number;
  sector: 1 | 2 | 3;
}

export interface RelativeCar {
  id: string;
  driverName: string;
  className: string;
  position: number;
  gapMs: number;
}

export interface SessionSnapshot {
  phase: SessionPhase;
  frame: TelemetryFrame;
  relatives: RelativeCar[];
}

export interface CoachMessage {
  id: string;
  level: 'info' | 'warning' | 'positive';
  text: string;
  createdAt: number;
}

export interface TelemetryProvider {
  start: (onData: (snapshot: SessionSnapshot) => void) => void;
  stop: () => void;
}
