/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {
      backgroundImage: {
        check: "url('/svg/Check.svg')"
      }
    },
    
  },
  plugins: [],
}

