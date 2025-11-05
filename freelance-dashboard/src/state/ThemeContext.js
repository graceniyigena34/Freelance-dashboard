import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect } from "react";
const ThemeContext = createContext(undefined);
export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    // Load theme from localStorage
    useEffect(() => {
        const stored = localStorage.getItem("theme");
        if (stored === "dark")
            setDarkMode(true);
    }, []);
    // Apply theme to HTML root
    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);
    const toggleTheme = () => setDarkMode(prev => !prev);
    return (_jsx(ThemeContext.Provider, { value: { darkMode, toggleTheme }, children: children }));
};
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context)
        throw new Error("useTheme must be used within ThemeProvider");
    return context;
};
