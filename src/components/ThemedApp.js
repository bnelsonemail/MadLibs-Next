// src/components/ThemedApp.js

"use client";
import { useTheme } from "@/context/ThemeContext";

export default function ThemedApp({ children }) {
  const { darkMode } = useTheme(); // ✅ Client-side theme hook

  return (
    <div className={darkMode ? "dark" : ""}> {/* ✅ Full-page dark mode toggle */}
      {children}
    </div>
  );
}
