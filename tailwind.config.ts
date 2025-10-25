import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/{js,ts,jsx,tsx,mdx}',
    './src/components/**/{js,ts,jsx,tsx,mdx(}',
    './src/app/**/{ js,ts,jsx,tsx,mdx }',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0052CC',
        secondary: '#FFB81C',
        accent: '#1a1a1a',
        light: '#f5f5f5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
export default config