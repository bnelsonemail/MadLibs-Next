# ESLint Fix Instructions for Next.js 16 + Flat Config (Brice Edition)

This document provides the exact steps to fix your ESLint issues after upgrading to **Next.js 16** and switching to the **ESLint flat config** system.

---

# ✅ 1. Rename ESLint Config File
Rename your ESLint config file to `.mjs` to avoid Node warnings:

```
mv eslint.config.js eslint.config.mjs
```

---

# ✅ 2. Replace Contents of `eslint.config.mjs` With This

```js
// eslint.config.mjs

import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  {
    ignores: ["**/.next/**", "**/node_modules/**"],
  },
  js.configs.recommended,
  {
    plugins: {
      next: nextPlugin,
    },
    rules: {
      // Allow JSX usage inside Next.js layouts without false unused import errors
      "no-unused-vars": ["error", { varsIgnorePattern: "^_" }],

      // Allow <Link> warnings to be properly enforced
      "@next/next/no-html-link-for-pages": "error",
    },
    languageOptions: {
      globals: {
        // Node Globals
        process: "readonly",

        // Web API Globals
        Response: "readonly",
        FormData: "readonly",
        URLSearchParams: "readonly",
        localStorage: "readonly",
        document: "readonly",
        window: "readonly",
        crypto: "readonly",
        TextEncoder: "readonly",
      },
    },
  },
];
```

---

# ✅ 3. Install Correct Packages

Run:

```
npm install -D eslint@9 @eslint/js eslint-config-next@16 @next/eslint-plugin-next
```

---

# ✅ 4. Clear The Cache (optional but helps)

```
npm cache clean --force
rm -rf .next
```

---

# ✅ 5. Run ESLint Again

```
npx eslint . --fix
```

---

# 🎉 Expected Result

After applying the fixes:

- No more `next is not a function` errors  
- No more “Cannot find eslint-plugin-next”  
- No more browser API false-errors  
- JSX parsing issues resolved  
- layout.js false positives no longer break your linting  
- You’ll only see **real errors** rather than config chaos  

---

# 👍 You’re Ready

Drop this MD file into your repo (maybe `docs/eslint-fix.md`) so you’ve got a future reference in case Next.js upgrades break things again!
