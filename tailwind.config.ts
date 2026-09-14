import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0369a1",
        secondary: "#0ea5e9",
        accent: "#f0f9ff",
      },
      fontFamily: { heading: ["var(--font-heading)"], body: ["var(--font-body)"] },
      boxShadow: {
        card: "0 4px 24px -4px rgba(3, 105, 161, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
