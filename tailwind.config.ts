/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#1a1a1a',
        'accent': '#d4a574', // Warm earth tone accent
        'light': '#f9f7f4',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['system-ui', 'sans-serif'],
      },
      spacing: {
        'hero': '80vh',
      },
    },
  },
  plugins: [],
};
