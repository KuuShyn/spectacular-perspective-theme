/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./templates/*.liquid",
    "./templates/customers/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",

  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url(//breastmil.myshopify.com/cdn/shop/t/3/assets/baby_large.jpg?v=90550805258474356221720114194)"
      }
    },
  },
  plugins: [],
};
