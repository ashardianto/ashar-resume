/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "320px",
      },
      colors: {
        'red': '#903a3d',
        'cream': '#b5a486',
        'darkblueish': '#17171f'
      },
      backgroundImage: theme => ({
        'home': "url('images/header-image.jpg')"
      }),
      width: {
        '600px': '600px'
      }
    },
  },
  plugins: [],
}
