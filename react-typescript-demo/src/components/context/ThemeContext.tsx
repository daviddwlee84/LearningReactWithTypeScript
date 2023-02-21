import { createContext } from "react";
import { theme } from "./theme";

// Creating context API

type ThemeContextProviderProps = {
    children: React.ReactNode
}

// Create Context
// React Context as a theme
export const ThemeContext = createContext(theme)

// Destructure children
export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
