import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                light: {
                    "primary":         "#6366f1",   // indigo
                    "primary-content": "#ffffff",
                    "secondary":       "#8b5cf6",   // violet
                    "secondary-content": "#ffffff",
                    "accent":          "#06b6d4",   // cyan
                    "accent-content":  "#ffffff",
                    "neutral":         "#374151",
                    "neutral-content": "#ffffff",
                    "base-100":        "#ffffff",
                    "base-200":        "#f3f4f6",
                    "base-300":        "#e5e7eb",
                    "base-content":    "#111827",
                },
                dark: {
                    "primary":         "#818cf8",   // lighter indigo
                    "primary-content": "#0f0f1a",
                    "secondary":       "#a78bfa",   // lighter violet
                    "secondary-content": "#0f0f1a",
                    "accent":          "#22d3ee",   // lighter cyan
                    "accent-content":  "#0f0f1a",
                    "neutral":         "#1f2937",
                    "neutral-content": "#f9fafb",
                    "base-100":        "#0f0f1a",
                    "base-200":        "#1a1a2e",
                    "base-300":        "#16213e",
                    "base-content":    "#f1f5f9",
                },
            },
        ],
        darkTheme: 'dark',
        base: true,
        styled: true,
        utils: true,
        logs: false,
    },
}

export default config