/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B3E',
          50: '#1a2d5a',
          100: '#162450',
          200: '#0D1B3E',
          900: '#070C18',
        },
        dms: {
          bg: '#0A0F1C',
          surface: '#0F1729',
          border: '#1E2A40',
        },
        green: {
          data: '#00D4AA',
          'data-dark': '#00b891',
          'data-light': '#33ddb9',
        },
        danger: '#FF4D4D',
        warning: '#F59E0B',
        slate: {
          brand: '#8896AB',
          light: '#F0F4F8',
          mid: '#c4cdd8',
        },
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
        'marquee-reverse': 'marquee-reverse 50s linear infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 8px rgba(0,212,170,0.5)', opacity: '1' },
          '50%': { boxShadow: '0 0 28px rgba(0,212,170,0.9)', opacity: '0.85' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh':
          'radial-gradient(at 40% 20%, hsla(212,100%,16%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(172,100%,41%,0.06) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(217,100%,14%,1) 0px, transparent 50%)',
      },
      boxShadow: {
        'green-glow': '0 0 40px rgba(0,212,170,0.2)',
        'green-glow-lg': '0 0 80px rgba(0,212,170,0.15)',
      },
    },
  },
  plugins: [],
};
