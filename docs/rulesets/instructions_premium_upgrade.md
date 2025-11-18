# Cursor Instructions: Add Premium Info, Poll Enhancements, DB Field, and Premium Overview Page

## 1. Update the Premium Poll Form

**File:** `src/components/PremiumPollForm.js`

Add a textarea:

```jsx
<div className="mt-6">
  <label className="block mb-2 font-bold text-lg text-gray-800">
    What premium features would you like to see?
  </label>
  <textarea
    name="suggestions"
    rows="4"
    className="w-full p-3 border rounded-lg text-black"
    placeholder="Example: More categories, unlimited reuse, create-your-own MadLibs, etc."
  />
</div>
```

Include `suggestions` in payload.

---

## 2. Update API Route for Turso

**File:** `src/app/api/poll/route.js`

Add:

```js
const { rating, wouldPay, comments, suggestions } = data;
```

Update SQL:

```sql
INSERT INTO poll_responses (rating, wouldPay, comments, suggestions, created_at)
VALUES (?, ?, ?, ?, datetime('now'));
```

Params array:

```js
[rating, wouldPay, comments, suggestions]
```

---

## 3. Update Turso Schema

```sql
ALTER TABLE poll_responses
ADD COLUMN suggestions TEXT;
```

---

## 4. Create Premium Overview Page

**New File:** `src/app/premium/page.js`

```jsx
import Link from "next/link";
import PremiumOverview from "@/components/PremiumOverview";

export default function PremiumPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-900">
      <PremiumOverview />

      <div className="mt-10 text-center">
        <Link
          href="/premium-poll"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
        >
          Take the Premium User Poll
        </Link>
      </div>
    </div>
  );
}
```

---

## 5. Create PremiumOverview Component

**New File:** `src/components/PremiumOverview.js`

```jsx
export default function PremiumOverview() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-center text-blue-700">
        MadLibs Magic Premium
      </h1>

      <p className="text-lg leading-relaxed">
        A playful, powerful upgrade to your MadLibs experience — not built in a
        high-schooler’s garage. MadLibs Magic Premium is engineered with care,
        polished like a real product, and infused with the same fun energy that
        makes MadLibs timeless.
      </p>

      <h2 className="text-2xl font-semibold">✨ What Premium Includes</h2>

      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>Create-Your-Own MadLibs Editor</li>
        <li>Unlimited noun/verb/adjective reuse</li>
        <li>Unlimited custom categories</li>
        <li>Premium-only themes & story sets</li>
        <li>Saved stories + sharing options</li>
        <li>And extra surprises the community votes on!</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">📊 Community-Driven Roadmap</h2>
      <p className="text-lg">
        Premium evolves based on YOU. Take the poll and let us know what you want
        next.
      </p>
    </div>
  );
}
```

---

## 6. Add Navbar Link

**File:** `src/components/Navbar.js`

```jsx
<Link
  href="/premium"
  className="hover:text-blue-600 transition-colors duration-200"
>
  Premium
</Link>
```

---

## 7. Update Poll Page Text

**File:** `src/app/premium-poll/page.js`

```jsx
<p className="mb-6 text-gray-700 text-lg">
  Help shape MadLibs Magic Premium! Your feedback decides which features we build
  first. Scroll down to take the poll — or <a href="/premium" className="text-blue-600 underline">click here</a> to see the Premium Overview and Feature Roadmap.
</p>
```

---

## 8. Optional: Add Validation for suggestions
Allow `suggestions` in server validation if applicable.

---

## 9. ESLint Fix

```bash
npx eslint . --fix
```
