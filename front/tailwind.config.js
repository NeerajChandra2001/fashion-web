// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "260px",
      xxs: "380px",
      xm: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        darkBlue: '#252B42',
        lightBlue:"#03B9DE",
        green:'#2DC071'
      },
    },
  },
  plugins: [],
};
