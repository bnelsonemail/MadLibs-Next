# MadLibs Premium Poll + Dashboard Integration — Cursor Instructions (Safe Version)

This Markdown file contains **all instructions** needed for Cursor to safely implement the MadLibs Premium Poll feature **without modifying any secrets or your `.env.local` file**.  
It also includes the dashboard introduction + poll button instructions.

---

# 🧩 1. Create `turso.example.txt` (DO NOT TOUCH `.env.local`)

Cursor must create a file at the **project root**:

```
turso.example.txt
```

Contents:

```
# Copy these values manually into .env.local
TURSO_CONNECTION_URL=
TURSO_AUTH_TOKEN=
SALT_FOR_HASHING=
```

Cursor must **not** insert actual secrets.  
User will fill these in manually.

---

# 🧩 2. Add Turso Client Helper

Create the file:

```
src/lib/turso.js
```

Contents:

```javascript
import { createClient } from "@libsql/client/web";

export const turso = createClient({
  url: process.env.TURSO_CONNECTION_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});
```

No hardcoded values.

---

# 🧩 3. Add IP Hash Utility

Create:

```
src/lib/hash-ip.js
```

Contents:

```javascript
export async function hashIP(ip, salt) {
  if (!ip) return null;

  const data = new TextEncoder().encode(ip + salt);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}
```

---

# 🧩 4. Create the Poll API Route

Create:

```
src/app/api/poll/route.js
```

Behavior:

```javascript
import { turso } from "@/lib/turso";
import { hashIP } from "@/lib/hash-ip";

export async function POST(req) {
  try {
    const { wantsPremium, pricePoint, comment } = await req.json();

    const userAgent = req.headers.get("user-agent") || "unknown";
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? null;

    const salt = process.env.SALT_FOR_HASHING;
    const ipHash = salt ? await hashIP(ip, salt) : null;

    await turso.execute({
      sql: `
        INSERT INTO poll_results 
          (wants_premium, price_point, comment, user_agent, ip_hash)
        VALUES (?, ?, ?, ?, ?)
      `,
      args: [wantsPremium, pricePoint, comment, userAgent, ipHash],
    });

    return Response.json({ success: true });
  } catch (e) {
    console.error(e);
    return Response.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}
```

Restrictions:

- No GET route  
- No admin endpoints  
- No secret modifications  
- No auto-creation of `.env.local`

---

# 🧩 5. Add Poll Form Component

Create:

```
src/components/PremiumPollForm.js
```

Behavior:

- Ask: “Would you use a premium MadLibs creator?”
- If yes → show price options
- Optional comment field
- Submit POST → `/api/poll`
- Show simple thank-you message after submission

Cursor may use Tailwind if the project does.

---

# 🧩 6. Create Poll Page

Create:

```
src/app/premium-poll/page.js
```

Behavior:

- Import & display `PremiumPollForm`
- Include a header like:

```jsx
<h1 className="text-3xl font-bold mb-4">MadLibs Premium Feature Poll</h1>
<p className="mb-6">Your feedback helps guide new features. This poll takes less than 30 seconds.</p>
```

---

# 🧩 7. Add Dashboard Introduction + Poll Button

Modify **dashboard/homepage**:

```
src/app/page.js
```

Add at the top of the page JSX:

```jsx
<div className="my-8 p-6 bg-blue-100 dark:bg-blue-900 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-2">Help Improve MadLibs!</h2>
  <p className="mb-4">
    We’re exploring new features for a premium MadLibs creator — and we would
    love your feedback! Click the button below to take a quick poll.
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

Restrictions:

- Do **not** rewrite or remove existing dashboard sections
- Do **not** alter `.env.local`

---

# 🧩 8. Testing Instructions (for Brice)

Cursor outputs these (does not execute them):

```
1. turso db tokens create madlibs-poll
2. cp turso.example.txt .env.local
3. Fill in:
   TURSO_CONNECTION_URL=
   TURSO_AUTH_TOKEN=
   SALT_FOR_HASHING=
4. npm run dev
```

---

# 🧩 9. Done!

Cursor now has everything required to build the poll system safely.

If future instructions are needed (admin panel, CSV export, dashboard analytics), they will be added separately.
