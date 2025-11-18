# Cursor Clarifications & Final Specs (Add to Main Instructions)

## 1. Database Setup

The Turso database and `poll_results` table already exist. Cursor must **NOT**:

- Create migrations
- Modify the schema
- Attempt to recreate the table

Existing table:

```sql
CREATE TABLE poll_results (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  wants_premium BOOLEAN,
  price_point TEXT,
  comment TEXT,
  user_agent TEXT,
  ip_hash TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

## 2. Dependencies

Cursor should:

- Check if `@libsql/client` is installed
- If missing, **add it to `package.json` and install it**

Cursor must **not** modify `.env.local`.

---

## 3. Poll Form Design — Final Specs

### Required Fields
- `wantsPremium` (boolean) — required
- If `wantsPremium === true`, `pricePoint` becomes required

### Price Point Options
- `$0.99`
- `$1.99`
- `$2.99`
- `$4.99`
- `Other` (reveals a text input)

### Optional Field
- `comment`  
- Max length: **300 characters**

### Validation Rules
- Validate required fields on the client
- Enforce price point only when applicable
- Enforce 300 character limit on comments

---

## 4. Project Type Details

### JavaScript Only
Do **not** convert anything to TypeScript.

### `"use client"` Directive
Only the form component must include:

```js
"use client";
```

Specifically:

```
src/components/PremiumPollForm.js
```

API routes and poll pages should **not** use `"use client"`.

---

## 5. Dashboard Integration Placement

Cursor must update:

```
src/app/page.js
```

Placement rules:

- Insert the poll introduction block immediately **after the main wrapper** (`<main>` or root `<div>`)
- It must appear at the top of the visible content
- Do **not** move or reorganize existing code
- Do **not** place anything above import statements

---

## 6. Post-Submission UX

After submitting the poll:

- Hide the form
- Show a simple “Thank you for your feedback!” message
- Do **not** redirect
- Do **not** reload the page
- Do **not** use localStorage or cookies

Client-side state only.

---

## Summary

Cursor must:

- Follow JavaScript conventions
- Apply the exact UI/UX flow
- Add dependencies if missing
- Avoid touching `.env.local`
- Insert the dashboard poll section carefully
- Implement the validated form with all the rules above

These specifications override any defaults or assumptions.
