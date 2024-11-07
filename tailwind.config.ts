import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      colors: {
        accents1: 'var(--accents-1)',
        accents2: 'var(--accents-2)',
        accents3: 'var(--accents-3)',
        accents4: 'var(--accents-4)',
        accents5: 'var(--accents-5)',
        accents6: 'var(--accents-6)',
        accents7: 'var(--accents-7)',
        accents8: 'var(--accents-8)',
        accents9: 'var(--accents-9)',
      },
      textColor: {
        accents1: 'var(--accents-1)',
        accents2: 'var(--accents-2)',
        accents3: 'var(--accents-3)',
        accents4: 'var(--accents-4)',
        accents5: 'var(--accents-5)',
        accents6: 'var(--accents-6)',
        accents7: 'var(--accents-7)',
        accents8: 'var(--accents-8)',
        accents9: 'var(--accents-9)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
