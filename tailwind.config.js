/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50:  '#FEF5EC',
          100: '#FDE8CF',
          200: '#FBCF9A',
          300: '#F9AD5E',
          400: '#F68B2C',
          500: '#E8621A',
          600: '#C44D10',
          700: '#9B3A0C',
          800: '#72290A',
          900: '#3D1505',
        },
        gold: {
          50:  '#FDFAED',
          100: '#FAF0C3',
          200: '#F4DD84',
          300: '#ECC745',
          400: '#D4A017',
          500: '#B8870F',
          600: '#926A0A',
          700: '#6B4D07',
          800: '#453205',
          900: '#221902',
        },
        ivory: {
          50:  '#FFFEF9',
          100: '#FAF3E0',
          200: '#F5E8C4',
          300: '#EDD59A',
          400: '#E2BB6A',
          500: '#D4A040',
        },
        dharma: {
          900: '#1A0E04',
          800: '#2D1A08',
          700: '#4A2D12',
          600: '#6B4226',
          500: '#8B5E3C',
        }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:  ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'lotus-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 C20 15, 10 20, 30 35 C50 20, 40 15, 30 5Z' fill='none' stroke='%23D4A017' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up':   'fadeUp 0.8s ease-out forwards',
        'fade-in':   'fadeIn 1.2s ease-out forwards',
        'float':     'float 6s ease-in-out infinite',
        'shimmer':   'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
