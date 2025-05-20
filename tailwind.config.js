// tailwind.config.js
import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mylight: {
          primary: "#2563EB",
          secondary: "#10B981",
          accent: "#F59E0B",
          neutral: "#1E293B",
          "base-100": "#F9FAFB",
          "base-content": "#111827",
          info: "#3ABFF8",
          success: "#22C55E",
          warning: "#FBBF24",
          error: "#EF4444",
        },
        mydark: {
          primary: "#3B82F6",
          secondary: "#34D399",
          accent: "#FBBF24",
          neutral: "#0F172A",
          "base-100": "#1E293B",
          "base-content": "#F8FAFC",
          info: "#60A5FA",
          success: "#4ADE80",
          warning: "#FACC15",
          error: "#F87171",
        },
      }
    ],
  },
}
