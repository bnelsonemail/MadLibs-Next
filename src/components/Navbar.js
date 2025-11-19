// src/components/Navbar.jsx

"use client";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className={`w-full p-4 border-b flex justify-between items-center transition-colors duration-300 ${darkMode ? "navbar-dark" : "navbar-light"}`}>
      {/* Left Side: Title */}
      <Link href="/" className="text-2xl font-bold">
        Mad Libs Magic
      </Link>

      {/* Right Side: Navigation Links */}
      <div className="flex gap-6 items-center">
        <Link href="/madlibs" className="hover:text-blue-500">
          View MadLibs
        </Link>
        <Link href="/madlibs/new" className="hover:text-blue-500">
          Create MadLib
        </Link>
        <Link href="/premium" className="hover:text-blue-500">
          Premium
        </Link>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`px-3 py-1 rounded border transition-colors duration-300 ${darkMode ? "button-dark" : "button-light"}`}
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
}
