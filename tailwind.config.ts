import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grayscale: {
          lightest: '#E0E0E0',
          lighter: '#B7B6B8',
          light: '#828282',
          dark: '#4F4F4F',
          darkest: '#333333',
        },
        brand: {
          primary: '#263238',
          secondary: '#65624C',
          accent: '#FFCF4B',
          background: '#F9F9F9',
        },
        text: {
          default: '#333333',
          highlight: '#27AE60',
          subdued: '#CEC6C6',
        },
        button: {
          primary: '#000000',
          secondary: '#FFBB00',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter-sans)'],
      },
      fontSize: {
        heading1: '3.625rem', // 58px
        heading2: '2.25rem', // 36px
        heading3: '1.5rem', // 24px
        heading4: '1.25rem', // 20px
        heading5: '1.125rem', // 18px
        heading6: '1rem', // 16px
        text_14: '0.875rem', // 14px
      },
      lineHeight: {
        tight: '1.1',
      },
      backgroundImage: {
        heroPattern: "url('/assets/images/banner-layer.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
