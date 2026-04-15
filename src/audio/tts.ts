import type { AppSettings } from '../types/settings';

export const speakCoachMessage = (message: string, settings: AppSettings): void => {
  if (!settings.voiceEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(message);
  utterance.rate = settings.voiceRate;
  utterance.pitch = settings.voicePitch;
  utterance.lang = 'fr-FR';
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};
