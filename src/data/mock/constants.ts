import type { RelativeCar } from '../../types/telemetry';

export const BASE_RELATIVES: RelativeCar[] = [
  { id: 'car-1', driverName: 'A. Martin', className: 'Hypercar', position: 5, gapMs: -4200 },
  { id: 'car-2', driverName: 'N. Costa', className: 'Hypercar', position: 6, gapMs: -900 },
  { id: 'car-3', driverName: 'You', className: 'Hypercar', position: 7, gapMs: 0 },
  { id: 'car-4', driverName: 'J. Blomqvist', className: 'Hypercar', position: 8, gapMs: 780 },
  { id: 'car-5', driverName: 'K. Kobayashi', className: 'Hypercar', position: 9, gapMs: 1900 },
  { id: 'car-6', driverName: 'S. Bourdais', className: 'Hypercar', position: 10, gapMs: 3400 },
];

export const TRACK_LENGTH_METERS = 13626;
export const SESSION_LENGTH_MS = 45 * 60 * 1000;
