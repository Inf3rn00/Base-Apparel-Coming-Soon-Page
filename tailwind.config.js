/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/index.html"],
  theme: {
    extend: {
      colors:{
        "Desaturated-Red": "hsl(0, 36%, 70%)",//primary
        "Soft-Red": "hsl(0, 93%, 68%)",// primary
        "Dark-Grayish-Red": "hsl(0, 6%, 24%)",//neutral
        //gradients
       "whitish":"hsl(0,0%,100%)",
       "peach": "hsl(0, 100%, 98%)",
       "dark-peach": "hsl(0, 80%, 86%)",
       "darker-peach": "hsl(0, 74%, 74%)"
      } ,
      backgroundImage: {
        'gradient-135deg': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        
      },
      screens: {
        'xs': '475px',
        'xs': {'max': '475px'},
        'xs-m': {'min': '475px'},
        'sm': { 'max': '640px' },
        'sm-m': { 'min': '640px' },
        'md': { 'max': '900px' },
        'md-m': { 'min': '900px' },
        'lg': { 'max': '1024px' },
        'lg-m': { 'min': '1024px' },
        'xl': { 'max': '1280px' },
        'xl-m': { 'min': '1280px' },
        '2xl': { 'max': '1536px' },
        '2xl-m': { 'min': '1536px' },
      },
      backgroundImage: {
        'desktop-bg': "url('/images/bg-pattern-desktop.svg')",
        'mobile-hero': "url('/images/hero-mobile.jpg')",
        'desktop-hero': "url('/images/hero-desktop.jpg')"
      },
      fontFamily: {
        'Josefin': ['Josefin Sans', 'sans-serif']
      },
      fontWeight: {
        'very-thin': 300,
        "thick-thin": 400,
        'semi-bold': 600
      }
    },
  },
  plugins: [],
};
