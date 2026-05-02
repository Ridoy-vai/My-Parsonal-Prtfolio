'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children }) {
    return (
        <NextThemesProvider
            attribute="data-theme"
            defaultTheme="light"
            themes={['light', 'dark']}
        >
            {children}
        </NextThemesProvider>
    )
}