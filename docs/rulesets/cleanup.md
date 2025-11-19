# 🧹 MadLibsMagic — ESLint Cleanup Guide

**Purpose:**  
Resolve all remaining ESLint errors after upgrading to **Next.js 16** and **ESLint 9 flat-config**.

**Scope:**  
This guide targets only *code-level errors*. All configuration issues have already been resolved.

---

## ✅ 1. Remove Unused Imports

ESLint is correctly flagging unused imports across components and pages:

```
'React' is defined but never used
'Link' is defined but never used
'Navbar' is defined but never used
...
```

### Action  
Delete unused imports at the top of each file.

Example:

```diff
- import React from "react";
- import Link from "next/link";
- import Navbar from "../components/Navbar";
```

---

## ✅ 2. Convert Pages Using Browser APIs into Client Components

Errors:

```
URLSearchParams is not defined
FormData is not defined
localStorage is not defined
```

These indicate the file is being treated as a **server component**.

### Action  
Add at the top of any file using DOM APIs:

```js
"use client";
```

---

## ✅ 3. Replace `<a>` Tags With `<Link />`

Errors:

```
@next/next/no-html-link-for-pages
```

### Action

Replace:

```jsx
<a href="/madlibs/new">Start</a>
```

With:

```jsx
import Link from "next/link";

<Link href="/madlibs/new">Start</Link>
```

---

## ✅ 4. Remove Unused Variables

Examples:

```
'err' is defined but never used
'React' is defined but never used
```

### Action  
Remove unused variables or prefix with `_` if truly needed.

```diff
- const err = something;
+ const _err = something;
```

---

## ✅ 5. Fix `process` / `Response` in API Routes

Errors:

```
'process' is not defined
'Response' is not defined
```

### Action  
Add to `globals` in `eslint.config.js`:

```js
process: "readonly",
Response: "readonly",
```

---

## 📁 6. Files Requiring Fixes

### Client Conversion Needed
- src/app/madlibs/[category]/form/page.js  
- src/app/madlibs/new/page.js  
- src/app/madlibs/new/result/page.js  
- src/app/madlibs/page.js  
- src/app/premium-poll/page.js  

### Remove Unused Imports
- layout.js  
- components/*.js  
- context/*.js  

### Replace `<a>`
- new/result/page.js  
- madlibs/page.js  

---

## 🚀 7. After Cleanup

Run:

```bash
npx eslint . --fix
npm run build
```

If both succeed → clean project.
