// eslint.config.mjs

import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  {
    ignores: ["**/.next/**", "**/node_modules/**"],
  },
  js.configs.recommended,
  {
    plugins: {
      "@next/next": nextPlugin,
      "react": react,
      "react-hooks": reactHooks,
    },
    rules: {
      // Allow JSX usage inside Next.js layouts without false unused import errors
      "no-unused-vars": ["error", { varsIgnorePattern: "^_" }],
      
      // React rules
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",

      // Allow <Link> warnings to be properly enforced
      "@next/next/no-html-link-for-pages": "error",
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // Node Globals
        process: "readonly",
        console: "readonly",

        // Web API Globals
        Response: "readonly",
        Request: "readonly",
        FormData: "readonly",
        URLSearchParams: "readonly",
        localStorage: "readonly",
        document: "readonly",
        window: "readonly",
        fetch: "readonly",
        crypto: "readonly",
        TextEncoder: "readonly",
      },
    },
  },
];
