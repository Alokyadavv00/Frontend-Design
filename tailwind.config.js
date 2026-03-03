/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#0CC8A8',
          dark: '#0F172A',
          darker: '#0B0F19',
        },
        sidebar: {
          light: '#ffffff',
          dark: '#111827', // A slightly lighter dark for sidebar
        },
        background: {
          light: '#F8FAFC', // Slate 50
          dark: '#0B0F19',  // Very dark blue/black
        },
        severity: {
          critical: '#ef4444',
          high: '#f97316',
          medium: '#eab308',
          low: '#22c55e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 15px rgba(12, 200, 168, 0.3)',
      },
      backgroundImage: {
        'login-gradient': 'radial-gradient(circle at top right, rgba(234, 179, 8, 0.15), transparent 40%), radial-gradient(circle at bottom right, rgba(239, 68, 68, 0.15), transparent 40%), radial-gradient(circle at bottom left, rgba(12, 200, 168, 0.15), transparent 40%)',
      }
    },
  },
  plugins: [],
}
