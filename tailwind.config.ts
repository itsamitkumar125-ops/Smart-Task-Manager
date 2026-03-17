import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f7ff',
          100: '#f0edff',
          200: '#e4d9ff',
          300: '#d4baff',
          400: '#b894ff',
          500: '#9d6fff',
          600: '#8f56ff',
          700: '#6c63ff',
          800: '#5a4dd4',
          900: '#3d2e66',
        },
        secondary: '#ff6584',
        success: '#27ae60',
        error: '#ff6b6b',
        warning: '#ffa500',
      },
    },
  },
  plugins: [],
}
export default config
