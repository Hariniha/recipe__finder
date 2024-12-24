module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1db954', // Spotify green for accents
        background: '#121212', // Dark background
        card: '#1e1e1e', // Dark card
        text: '#ffffff', // Light text
        link: '#1db954', // Accent link
      },
    },
  },
  plugins: [],
}