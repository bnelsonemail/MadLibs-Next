# MadLibs Premium Poll — Light/Dark Mode Styling Enhancements (Cursor Instructions)

These instructions update the previously provided frontend upgrade document to ensure **full readability in both light and dark mode**.  
Cursor — follow these instructions exactly and apply them in place of the earlier styling blocks.

---

# 🎨 Purpose

Your site supports light and dark themes using Tailwind’s `dark:` syntax.  
The original instructions included `text-gray-300` and `bg-gray-800`, which look great in dark mode but have weak contrast in light mode.

These updated instructions provide **paired light + dark Tailwind classes** for consistent readability.

---

# ✅ 1. Updated Explanatory Text Block  
**File:** `src/app/premium-poll/page.js`  
**Location:** Add below `<h1>`, above poll form  
**Use this version instead of the previous one:**

```jsx
<p className="text-center max-w-xl mx-auto mb-6 text-gray-700 dark:text-gray-300">
  We're exploring a possible <strong>optional premium version</strong> of MadLibs
  for users who want more advanced features — while keeping the current site
  <strong>100% free</strong> exactly as it is today.
  <br /><br />
  These are only ideas at this stage. Your feedback helps decide what features
  (if any) should be developed in the future.
</p>
```

This ensures the text is dark enough in light mode and soft enough in dark mode.

---

# ✅ 2. Updated “Possible Premium Features” Section  
**File:** `src/app/premium-poll/page.js`  
**Location:** Below explanatory text, above form component  
**Use this corrected version:**

```jsx
<div className="max-w-xl mx-auto mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-md shadow">
  <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Possible Premium Features:</h3>
  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
    <li>Save your custom MadLibs permanently</li>
    <li>Share your MadLibs with friends via link</li>
    <li>Unlimited custom story creation</li>
    <li>Advanced story templates and genres</li>
    <li>Optional AI-assisted story generation</li>
  </ul>
</div>
```

This card-style section now blends cleanly with both themes.

---

# ⚠️ Requirements for Cursor

Cursor must:

- Apply these replacements **instead of** the original blocks  
- Preserve all layout and component structure  
- Not modify backend logic  
- Not modify `.env.local`  
- Not refactor unrelated sections  
- Use existing Tailwind styling conventions  

These styling updates ensure visual accessibility and consistency across light and dark modes.

---

# 📘 End of Instructions

These updates should be added to your project documentation alongside your main cursor instruction set for complete traceability.

