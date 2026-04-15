export const formatMs = (value: number): string => {
  const total = Math.max(0, Math.round(value));
  const minutes = Math.floor(total / 60_000);
  const seconds = Math.floor((total % 60_000) / 1000);
  const millis = total % 1000;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(millis).padStart(3, '0')}`;
};

export const formatDelta = (value: number): string => `${value >= 0 ? '+' : '-'}${(Math.abs(value) / 1000).toFixed(3)}s`;
