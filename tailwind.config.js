/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
        screens: {
        xs: '480px', // custom for small phones
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
      colors: {
        bgColor: '#E1F8DC',

      },
      gridTemplateAreas: {
         
          layout:[
            'details rightside',
            'leftside rightside',
          ],

          mobile:[
            'details',
            'rightside',
            'leftside',
          ]
         
         
      },



    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
}

