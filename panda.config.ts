import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],

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
          primary: { value: "#2679c2" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  clean: true,

  // TODO: use variables
  minify: false,
  hash: false,
});
