
# MadLibs Premium Poll — Frontend Explanation Upgrade (Cursor Instructions)

Cursor — follow these instructions exactly.  
Do **not** modify any backend logic, database configuration, or `.env.local` values.  
Only update the frontend for clarity and user reassurance.

---

# ✅ Overview

We want to:

- Add a clearer explanation of what “premium features” might include  
- Reassure users that the free version of the site will **always remain free**  
- Improve trust and poll participation  
- Make the UI more informative and professional  

These changes belong **only** on the frontend:

1. Add a more descriptive panel on the **dashboard**  
2. Add an introduction + premium feature list on the **poll page**

Follow the exact placement and wording below.

---

# ✅ 1. Update the Dashboard Panel  
**File:** `src/app/page.js`

Locate the existing poll introduction panel that was previously added.

Replace the entire panel with the following JSX:

```jsx
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

  <a
    href="/premium-poll"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
  >
    Take the Poll
  </a>
</div>
```

### Placement Requirement
Insert this panel:

- Directly **below** the outer layout wrapper (`<main>` or similar)
- At the **top of the visible page content**
- Without moving or refactoring other sections

---

# ✅ 2. Add Explanatory Text at Top of Premium Poll Page  
**File:** `src/app/premium-poll/page.js`

Insert the following **below the `<h1>` header** and **above** the poll form component:

```jsx
<p className="text-center max-w-xl mx-auto mb-6 text-gray-300">
  We're exploring a possible <strong>optional premium version</strong> of MadLibs
  for users who want more advanced features — while keeping the current site
  <strong>100% free</strong> exactly as it is today.
  <br /><br />
  These are only ideas at this stage. Your feedback helps decide what features
  (if any) should be developed in the future.
</p>
```

---

# ✅ 3. Add a “Possible Premium Features” Section  
Still inside `src/app/premium-poll/page.js`, insert this **below the explanatory text** and **above** the form:

```jsx
<div className="max-w-xl mx-auto mb-8 p-4 bg-gray-800 rounded-md shadow">
  <h3 className="font-semibold mb-2">Possible Premium Features:</h3>
  <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
    <li>Save your custom MadLibs permanently</li>
    <li>Share your MadLibs with friends via link</li>
    <li>Unlimited custom story creation</li>
    <li>Advanced story templates and genres</li>
    <li>Optional AI-assisted story generation</li>
  </ul>
</div>
```

---

# ⚠️ Requirements for Cursor

Cursor must:

- Preserve all existing styling, theming, and layout  
- Not modify backend/API/database logic  
- Not touch environment variables  
- Not refactor other parts of the page  
- Insert the blocks in the correct locations  
- Use existing Tailwind styling conventions  

---

# 🎉 End of Instructions

These enhancements make the poll more informative and reassuring, improving trust and participation.
