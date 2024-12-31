//tells the IDE that this is a tailwind css file and allows for auto completion of code
/** @type {import('tailwindcss').Config} */

export default {
  // tells tailwind to scan index.html, and all dirs and sub dirs of src for files ending with mentioned extensions
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./src/assets/bg.jpeg')",
      },
    },
  },
  plugins: [],
};
