// src/app/page.js

"use client";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function HomePage() {
  const { darkMode } = useTheme();

  return (
    <main className="text-center p-8 transition-colors duration-300">
      <div className="my-8 p-6 bg-blue-100 dark:bg-blue-900 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">Help Improve MadLibs!</h2>

        <p className="mb-3">
          We're exploring optional premium features for users who want to create and
          save unlimited advanced MadLibs — while keeping the entire free site exactly
          the same.
        </p>

        <p className="mb-4">
          Nothing is changing right now. We would simply love your quick feedback
          about whether these premium features would be useful to you.
        </p>

        <Link
          href="/premium-poll"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Take the Poll
        </Link>
      </div>

      <h1 className="text-4xl font-bold">Welcome to MadLibs!</h1>
      <p className="mt-4 text-lg">Create and play hilarious stories with custom words.</p>

      {/* Toggle indicator */}
      <div className="mt-4 text-gray-500">
        {darkMode ? "🌙 Dark Mode Enabled" : "🌞 Light Mode Enabled"}
      </div>

      {/* Instructions - Container stays dark, text adapts */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-3 text-white">How It Works</h2>
        <ul className="text-left text-lg space-y-2 text-gray-300">
          <li>📝 <strong>Fill Out the Form:</strong> Enter words like nouns, verbs, or adjectives.</li>
          <li>📖 <strong>See Your Story:</strong> Your words are placed into a fun, randomized story.</li>
          <li>🔄 <strong>New Form:</strong> Clears your inputs so you can start fresh.</li>
          <li>🎲 <strong>New Story:</strong> Keeps your words but gives you a different story.</li>
        </ul>
      </div>

      {/* Navigation Button */}
      <Link href="/madlibs" className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded">
        View MadLibs
      </Link>
    </main>
  );
}

