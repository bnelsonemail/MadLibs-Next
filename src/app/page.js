// src/app/page.js

"use client";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function HomePage() {
  const { darkMode } = useTheme();

  return (
    <main className="text-center p-8 transition-colors duration-300">
      <h1 className="text-4xl font-bold">Welcome to MadLibs!</h1>
      <p className="mt-4 text-lg">Create and play hilarious stories with custom words.</p>

      {/* Toggle indicator */}
      <div className="mt-4 text-gray-500">
        {darkMode ? "🌙 Dark Mode Enabled" : "🌞 Light Mode Enabled"}
      </div>

      {/* Navigation Button */}
      <Link href="/madlibs" className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded">
        View MadLibs
      </Link>
    </main>
  );
}
