/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        library: {
          bg: '#F7F3E9',
          surface: '#FAF7F0',
          card: '#FFFFFF',
          text: '#151C24',
          'text-muted': '#5A6578',
          border: '#E2DCD0',
          emerald: {
            DEFAULT: '#143D33',
            light: '#1F5A4B',
            dark: '#0C2720',
          },
          blue: {
            DEFAULT: '#1B365D',
            light: '#284E82',
            dark: '#11223B',
          },
          gold: {
            DEFAULT: '#B8924A',
            light: '#D4B06A',
            dark: '#8C6C30',
          },
          dark: {
            bg: '#0F141C',
            surface: '#151D28',
            card: '#1C2636',
            text: '#E5E9F0',
            border: '#2C3B50',
          }
        },
      },
      fontFamily: {
        amiri: ['Amiri', 'serif'],
        ruqaa: ['"Aref Ruqaa"', 'serif'],
        naskh: ['"Noto Naskh Arabic"', 'serif'],
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'islamic': '0 4px 20px -2px rgba(20, 61, 51, 0.08), 0 2px 6px -1px rgba(27, 54, 93, 0.04)',
        'islamic-lg': '0 10px 30px -4px rgba(20, 61, 51, 0.12), 0 4px 12px -2px rgba(27, 54, 93, 0.08)',
      },
    },
  },
  plugins: [],
};
