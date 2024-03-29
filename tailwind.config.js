
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#3ABFF8",

          "secondary": "#D926A9",

          "accent": "#1FB2A6",

          "neutral": "#6419E6",

          "base-100": "#2A303C",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
      "light",
      
    ], 
  },
  plugins: [require("daisyui")],
}