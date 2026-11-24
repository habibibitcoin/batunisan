/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,html}'],
  theme: {
    extend: {
      colors: {
        alabaster: '#E9E1D3',
        travertine: '#DCCFBB',
        basalt: '#1C1B19',
        slate: '#4E4A43',
        brass: '#7C5E3A',
        moss: '#2F3E34'
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        widest2: '0.18em'
      },
      transitionDuration: {
        400: '400ms'
      }
    }
  },
  plugins: []
};
