import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  // presets: [],
  theme: {
    // tokens: {
    //   colors: {
    //     primary: { value: '#2679c2' },
    //   },
    // },

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

  // minify: process.env.NODE_ENV === 'production',
  // hash: process.env.NODE_ENV === 'production',
  minify: false,
  hash: false,
});
