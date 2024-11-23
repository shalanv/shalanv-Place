/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gh-bg': '#0d1117',
        'gh-bg-secondary': '#161b22',
        'gh-border': '#30363d',
        'gh-text': '#c9d1d9',
        'gh-text-secondary': '#8b949e',
        'gh-link': '#58a6ff',
        'gh-btn': '#238636',
        'gh-btn-hover': '#2ea043',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Noto Sans', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji'],
        mono: ['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', 'monospace'],
      },
      boxShadow: {
        'gh': '0 1px 0 rgba(27,31,36,0.04)',
        'gh-md': '0 3px 6px rgba(140,149,159,0.15)',
        'gh-lg': '0 8px 24px rgba(140,149,159,0.2)',
      },
    },
  },
  plugins: [],
}
