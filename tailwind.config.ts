import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.svg"],
    theme: {
      extend: {
        fontFamily: {
          sans: ["var(--font-geist-sans)"],
          mono: ["var(--font-geist-mono)"],
        },
        typography: {
          quoteless: {
            css: {
              "blockquote p:first-of-type::before": { content: "none" },
              "blockquote p:first-of-type::after": { content: "none" },
            },
          },
        },
      },
    },
    plugins: [require("@tailwindcss/typography")],
};
export default config;
