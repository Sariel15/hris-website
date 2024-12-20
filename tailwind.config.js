/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        "blue-green": '#00B8D4',
        "dodgeroll-gold": "#F79F1A",
        "apple-green": "#046E1B",
        "dire-wolf": "#292727",
        "purple-lightC": "#844DDC20",
        "purple-ITS": "#844DDC",
        "blue-ITS": "#195CAC",
        "yellow-ITS": "#D3A314",
        "cyan-ITS": "#00B8D4",
      },
    },
     fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    container: {
      center: true,
      padding: "2rem",
    },
    width: {
      '128': '32rem',
      '144': '36rem',
      '160': '40rem',
    },
    height: {
      '128': '32rem',
      '144': '36rem',
      '160': '40rem',
    }
  },
};