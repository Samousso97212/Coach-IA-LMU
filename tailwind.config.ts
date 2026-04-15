import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          500: '#38bdf8',
          600: '#0284c7',
        },
      },
      boxShadow: {
        panel: '0 0 0 1px rgba(148,163,184,0.15), 0 10px 30px rgba(2,6,23,0.4)',
      },
    },
  },
  plugins: [],
} satisfies Config;
