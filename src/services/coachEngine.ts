import type { CoachMessage, SessionSnapshot } from '../types/telemetry';

const uid = () => `${Date.now()}-${Math.round(Math.random() * 10_000)}`;

export const evaluateCoachRules = (
  current: SessionSnapshot,
  previous: SessionSnapshot | null,
): CoachMessage[] => {
  const messages: CoachMessage[] = [];
  const { frame } = current;

  if (frame.brake > 0.88 && previous && previous.frame.brake < 0.45 && frame.speedKph > 180) {
    messages.push({
      id: uid(),
      level: 'warning',
      text: 'Freinage trop brutal : attaque plus progressive pour garder la stabilité.',
      createdAt: frame.timestamp,
    });
  }

  if (frame.throttle > 0.95 && previous && previous.frame.throttle < 0.45 && Math.abs(frame.steering) > 0.35) {
    messages.push({
      id: uid(),
      level: 'warning',
      text: 'Remise des gaz trop agressive en appui : ouvre le volant avant de réaccélérer.',
      createdAt: frame.timestamp,
    });
  }

  if (previous && frame.deltaMs < previous.frame.deltaMs - 120 && frame.sector !== previous.frame.sector) {
    messages.push({
      id: uid(),
      level: 'positive',
      text: `Bonne progression : secteur ${frame.sector} en amélioration.`,
      createdAt: frame.timestamp,
    });
  }

  return messages;
};
