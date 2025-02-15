// src/context/ThemeContext.js

"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Create Theme Context
const ThemeContext = createContext();

// Provider Component
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for saved preference
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook for Using the Theme Context
export function useTheme() {
  return useContext(ThemeContext);
}
