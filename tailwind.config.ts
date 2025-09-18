import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Custom Color Palette
        primary: {
          50: '#fff5f5',
          100: '#ffe0e0',
          200: '#ffc7c7',
          300: '#ffa0a0',
          400: '#ff7a7a',
          500: '#FF6B6B', // Coral Red - Main brand color
          600: '#ff4d4d',
          700: '#e53e3e',
          800: '#c53030',
          900: '#9b2c2c',
        },
        secondary: {
          50: '#fffef0',
          100: '#fffae6',
          200: '#fff4cc',
          300: '#ffee99',
          400: '#ffe666',
          500: '#FFD93D', // Bright Yellow - Highlights
          600: '#ffcc00',
          700: '#e6b800',
          800: '#cc9900',
          900: '#997300',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#4D96FF', // Sky Blue - Links & secondary buttons
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#6BCB77', // Emerald Green - Success states
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        neutral: {
          50: '#fafafa',
          100: '#F9F9F9', // Off-White - Page background
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#2D2D2D', // Charcoal - Text & sidebar
          900: '#171717',
        },
        border: {
          DEFAULT: '#1E1E3F', // Deep Navy - Thick borders
          light: '#e5e7eb',
          dark: '#374151',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '8': '8px',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        thick: '0 4px 0 0 #1E1E3F', // Deep Navy
        'thick-primary': '0 4px 0 0 #FF6B6B', // Coral Red
        'thick-secondary': '0 4px 0 0 #FFD93D', // Bright Yellow
        'thick-accent': '0 4px 0 0 #4D96FF', // Sky Blue
        'thick-success': '0 4px 0 0 #6BCB77', // Emerald Green
        'thick-danger': '0 4px 0 0 #ef4444', // Red for errors
      },
    },
  },
  plugins: [],
};

export default config;
