/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#D9D9D9',
        secondary: '#FC5113',
        blue: {
          100: '#165BAA',
        },
        purple: {
          100: '#BCC4FF',
        },
        gray: {
          100: '#BFBFBF',
        },
        yellow: {
          100: '#FFDF3F',
        },
        green: {
          100: '#FFDF3F',
        }
      },
      fontFamily: {
        h: ['Montserrat-Bold', 'sans-serif'],
        p: ['Montserrat-Regular', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
