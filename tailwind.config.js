/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // For root-level files
    "./app/**/*.{js,jsx,ts,tsx}", // For files inside `app` folder
    "./components/**/*.{js,jsx,ts,tsx}", // For files inside `components` folder
  ],
  presets: [require("nativewind/preset")], // NativeWind preset
  theme: {
    extend: {}, // Extend theme here
  },
  plugins: [], // Add plugins if needed
};
