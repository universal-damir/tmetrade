/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#61726E',
          light: '#7A8A86',
          dark: '#4A5A56',
          50: '#F5F7F6',
          100: '#E1E5E4',
          200: '#C3CDC9',
          300: '#A5B1AD',
          400: '#889590',
          500: '#61726E',
          600: '#545F5C',
          700: '#404845',
          800: '#2D302F',
          900: '#1A1C1B',
        },
        accent: {
          DEFAULT: '#E5A95E',
          light: '#F0C18A',
          dark: '#D08A3C',
        },
        success: '#34D399',
        warning: '#FBBF24',
        error: '#F87171',
      },
      boxShadow: {
        'smooth': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'hover': '0 10px 40px rgba(0, 0, 0, 0.12)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};