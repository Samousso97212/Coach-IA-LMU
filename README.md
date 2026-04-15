# Coach IA LMU Dashboard V1

Dashboard multi-pages de télémétrie sim racing (Le Mans Ultimate) construit avec **React + TypeScript + Vite + TailwindCSS**.

> ⚠️ Dans cet environnement, l'installation npm a été bloquée (403 registry). Le code est prêt mais les dépendances doivent être installées dans un environnement réseau autorisé.

## Fonctionnalités V1

- Dashboard Overview centralisant les KPI clés.
- Pages dédiées : Telemetry, Timing, Relative/Opponents, Virtual Coach, Settings.
- Télémétrie mock réaliste en temps réel :
  - speed
  - RPM
  - throttle / brake
  - steering
  - lap time
  - best lap
  - delta
  - fuel
  - relative cars
  - session timer
- Moteur de coach virtuel à règles simples.
- Sortie vocale des messages coach via **Web Speech API (TTS)**.
- Architecture provider pour préparer l'intégration d'une vraie source LMU.

## Démarrage

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Architecture

```txt
src/
  components/      # Blocs UI réutilisables (cards, gauges, bars)
  widgets/         # Assemblages fonctionnels (telemetry core, relative table, coach feed)
  pages/           # Pages routées
  store/           # État global (Zustand)
  services/        # Providers télémétrie, coach engine, formatters
  hooks/           # Hooks applicatifs
  types/           # Contrats TypeScript stricts
  data/mock/       # Données de base mock (grid relative, constantes session)
  audio/           # TTS Web Speech API
  layout/          # Shell applicatif et navigation
```

## Flux de données

1. `useTelemetry()` démarre `MockTelemetryProvider`.
2. Le provider pousse un `SessionSnapshot` toutes les 200 ms.
3. Le store reçoit le snapshot et appelle `evaluateCoachRules()`.
4. Les messages coach sont ajoutés au feed + lecture audio selon settings.
5. Widgets/pages lisent le store et affichent les données en temps réel.

## Couche TelemetryProvider

- `MockTelemetryProvider` : implémentation active V1 pour simulation immédiate.
- `createTelemetryProvider('live')` : placeholder pour future intégration Le Mans Ultimate.

### Intégrer une vraie télémétrie plus tard

1. Implémenter un `LiveTelemetryProvider` conforme à l'interface `TelemetryProvider` dans `src/types/telemetry.ts`.
2. Connecter la source réelle (UDP bridge, SDK, websocket, etc.) et convertir en `SessionSnapshot`.
3. Brancher ce provider dans `useTelemetry` ou via un sélecteur mode mock/live.
4. Garder le store et les widgets inchangés (architecture découplée).

## Notes techniques

- TypeScript strict activé (`strict`, `noUncheckedIndexedAccess`, etc.).
- Composants modulaires et réutilisables.
- Style Tailwind orienté dashboard sombre.
