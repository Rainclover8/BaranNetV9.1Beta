import { PluginAPI } from "tailwindcss/types/config";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        sans: ["Dancing Script", ...defaultTheme.fontFamily.sans],
        vibes: ["Great Vibes", ...defaultTheme.fontFamily.serif],
        playwrite: ["Playwrite IN", ...defaultTheme.fontFamily.serif],
        vinyl: ["Rubik Vinyl", ...defaultTheme.fontFamily.serif],
        sans2: ["Sansita Swashed", ...defaultTheme.fontFamily.serif],
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [
    function addVariablesForColors({ addBase, theme }: PluginAPI) {
      const allColors = flattenColorPalette(theme("colors"));
      const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [
          `--${key}`,
          val as string, // Türü açıkça belirtmek için `as string` ekleniyor
        ])
      );

      addBase({
        ":root": newVars as Record<string, string>, // `newVars` türünü açıkça belirtiyoruz
      });
    },
  ],
};
