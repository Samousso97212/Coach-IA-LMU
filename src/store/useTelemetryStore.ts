import { create } from 'zustand';
import { speakCoachMessage } from '../audio/tts';
import { evaluateCoachRules } from '../services/coachEngine';
import type { AppSettings } from '../types/settings';
import type { CoachMessage, SessionSnapshot } from '../types/telemetry';

interface TelemetryState {
  snapshot: SessionSnapshot | null;
  previousSnapshot: SessionSnapshot | null;
  coachMessages: CoachMessage[];
  settings: AppSettings;
  setSnapshot: (snapshot: SessionSnapshot) => void;
  updateSettings: (partial: Partial<AppSettings>) => void;
}

const defaultSettings: AppSettings = {
  voiceEnabled: true,
  voiceRate: 1,
  voicePitch: 1,
  coachSensitivity: 'balanced',
};

export const useTelemetryStore = create<TelemetryState>((set, get) => ({
  snapshot: null,
  previousSnapshot: null,
  coachMessages: [],
  settings: defaultSettings,
  setSnapshot: (snapshot) => {
    const previous = get().snapshot;
    const generated = evaluateCoachRules(snapshot, previous);

    if (generated.length > 0) {
      speakCoachMessage(generated[0].text, get().settings);
    }

    set((state) => ({
      previousSnapshot: previous,
      snapshot,
      coachMessages: [...generated, ...state.coachMessages].slice(0, 30),
    }));
  },
  updateSettings: (partial) =>
    set((state) => ({
      settings: {
        ...state.settings,
        ...partial,
      },
    })),
}));
