/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5fbff',
          100: '#e6f4ff',
          200: '#bfe8ff',
          300: '#99dbff',
          400: '#4fbfff',
          500: '#158fff',
          600: '#0e6fe6',
          700: '#0b54b3',
          800: '#083f80',
          900: '#062b4d'
        },
        neutral: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e9e9eb',
          300: '#d6d6d9',
          400: '#bfbfc4',
          500: '#9f9fa6',
          600: '#6f6f76',
          700: '#4a4a50',
          800: '#2f2f33',
          900: '#141416'
        }
      },
      spacing: {
        0.5: '2px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        6: '24px',
        8: '32px',
        10: '40px',
        12: '48px',
        16: '64px'
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '18px'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
