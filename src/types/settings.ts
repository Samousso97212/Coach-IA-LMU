export interface AppSettings {
  voiceEnabled: boolean;
  voiceRate: number;
  voicePitch: number;
  coachSensitivity: 'conservative' | 'balanced' | 'aggressive';
}
