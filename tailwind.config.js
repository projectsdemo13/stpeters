/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF8EC',
          100: '#FFEFD3',
          200: '#FFE1A8',
          300: '#FFCF7D',
          400: '#FFBC52',
          500: '#F9A835', // Main brand color
          600: '#E08C1A',
          700: '#B86D0F',
          800: '#8F5109',
          900: '#663A06',
          950: '#4A2904',
        },
        secondary: {
          50: '#EEEEFF',
          100: '#E0E0FF',
          200: '#C1C0FF',
          300: '#9E9CFF',
          400: '#7A76FF',
          500: '#4A47A3', // Main secondary color
          600: '#3B3982',
          700: '#2D2C64',
          800: '#1F1F46',
          900: '#13132D',
          950: '#0A0A1A',
        },
        tertiary: {
          50: '#FFF1F1',
          100: '#FFE1E1',
          200: '#FFC7C7',
          300: '#FFA3A3',
          400: '#FF7171',
          500: '#C11D20', // Main tertiary color
          600: '#991718',
          700: '#731112',
          800: '#4D0C0D',
          900: '#2E0707',
          950: '#1A0404',
        }
      },
    },
  },
  plugins: [],
};