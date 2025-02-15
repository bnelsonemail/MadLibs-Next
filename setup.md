# Setup

## Table of Contents

- [Setup](#setup)
  - [Table of Contents](#table-of-contents)
  - [Next JS Setup](#next-js-setup)
  - [Testing](#testing)
  - [Page.js](#pagejs)
  - [Layout.js](#layoutjs)
  - [Tailwind Config](#tailwind-config)
  - [navBar.jsx setup (example)](#navbarjsx-setup-example)
  - [File Structure](#file-structure)

## Next JS Setup

- npx create-next-app@latest .

## Testing

- npm install *save-dev @testing-library/jest-dom @testing-library/*react @testing-library/user-event
- package.json -- add *"test": "jest"* in "scripts"

## Page.js

<!--
// src/app/page.js

import BoxList from "./boxes/BoxList";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">React Box App</h1>
      <BoxList />
    </div>
  );
}
-->

## Layout.js

<!--
// src/app/layout.js

import "./globals.css";

export const metadata = {
  title: "React Box App",
  description: "An app to dynamically add and remove boxes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
-->

## Tailwind Config

<!-- 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
-->

- If TW is not being applied, use the following command:
  - npm install tailwindcss postcss autoprefixer

## navBar.jsx setup (example)

<!--
// src/navBar.jsx

"use client";

import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 w-full">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left Side - Vending Machine */}
        <div>
          <Link
            href="/"
            className="text-2xl font-bold transition-colors duration-300 hover:text-blue-300"
          >
            Vending Machine
          </Link>
        </div>

        {/* Right Side - Snack Links */}
        <div className="flex space-x-8">
          <Link
            href="/snacks/coke"
            className="text-lg transition-colors duration-300 hover:text-blue-300"
          >
            Coke
          </Link>
          <Link
            href="/snacks/lays"
            className="text-lg transition-colors duration-300 hover:text-blue-300"
          >
            Lays Chips
          </Link>
          <Link
            href="/snacks/snickers"
            className="text-lg transition-colors duration-300 hover:text-blue-300"
          >
            Snickers
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
-->

## File Structure

42_hatchways_madlibs/
madlibs-app/
 ├── src/
 │   ├── app/                      ✅ Next.js App Router Pages
 │   │   ├── layout.js             ✅ Global layout (Navbar, Footer, Providers)
 │   │   ├── page.js               ✅ Home Page
 │   │   ├── globals.css           ✅ Global styles including dark mode, Styling (CSS & Tailwind)
 │   │   ├── madlibs/              ✅ MadLibs Section
 │   │   │   ├── page.js           ✅ MadLibs List Page
 │   │   │   ├── new/page.js       ✅ Create New MadLib Page
 │   │   │   ├── [id]/page.js      ✅ Individual MadLib Play Page
 │   ├── components/               ✅ Reusable UI Components
 │   │   ├── Navbar.js             ✅ Navigation bar with dark mode toggle
 │   │   ├── Footer.js             ✅ Footer with author credit and links
 │   │   ├── ThemedApp.js          ✅ Handles dark/light mode theme
 │   ├── context/                  ✅ Global State Management (Context API)
 │   │   ├── MadLibsContext.js      ✅ Stores & manages MadLibs
 │   │   ├── ThemeContext.js        ✅ Manages dark/light mode state
 │   ├── public/                    ✅ Public Assets (Images, Favicons, etc.)
 │   ├── utils/                      ✅ Utility functions (optional)
 │   ├── .env                        ✅ Environment Variables (for future DB)
 │   ├── .gitignore                   ✅ Ignore unnecessary files in Git
 │   ├── next.config.js               ✅ Next.js configuration
 │   ├── package.json                 ✅ Project dependencies
 │   ├── README.md                     ✅ Documentation
 │   │
 ├── .env                     # Environment variables (Database, API keys)
 ├── .gitignore                # Files to ignore in Git
 ├── tailwind.config.js        # Tailwind configuration
 ├── postcss.config.js         # PostCSS config for Tailwind
 ├── package.json              # Dependencies
 ├── next.config.js            # Next.js configuration
 ├── README.md                 # Project documentation
