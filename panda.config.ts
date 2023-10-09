import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,

  // Where to look for your css declarations
  include: [
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  // presets: ['@pandacss/preset-panda'],
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: '#2679c2' },
          lightBg: { value: '#f9f9f9' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
  outExtension: 'js',
  clean: true,

  optimize: process.env.NODE_ENV === 'production',
  minify: process.env.NODE_ENV === 'production',
});
