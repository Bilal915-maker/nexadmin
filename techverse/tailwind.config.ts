import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#05050a', 900: '#08080f', 800: '#0d0d16', 700: '#14141e' },
        graphite: { DEFAULT: '#1d1e24', 600: '#2a2b33', 500: '#3a3b45', 400: '#5b5d6b', 300: '#8a8c9a', 200: '#b9bbc7', 100: '#e3e4ea' },
        volt: { DEFAULT: '#8b3dff', 300: '#b38bff', 400: '#9d5cff', 600: '#7426e8', 700: '#5b17c2' },
        cyan: { DEFAULT: '#1fe0ff', 300: '#7bf0ff', 400: '#3fe6ff', 600: '#00b8d9', 700: '#0090ad' },
        paper: { DEFAULT: '#f3f3f6', 200: '#e8e8ee', 300: '#d8d8e0' },
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['var(--font-sora)', 'var(--font-inter)', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: { page: '88rem' },
      letterSpacing: { tightest: '-0.045em' },
      backgroundImage: {
        'volt-cyan': 'linear-gradient(120deg, #8b3dff 0%, #1fe0ff 100%)',
        'radial-fade': 'radial-gradient(ellipse at center, rgba(139,61,255,0.18), transparent 60%)',
      },
      keyframes: {
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      animation: { shimmer: 'shimmer 6s linear infinite' },
    },
  },
  plugins: [],
}

export default config
