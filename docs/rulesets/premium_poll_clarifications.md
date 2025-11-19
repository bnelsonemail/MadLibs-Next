# Premium Feature & Poll Upgrade — Final Clarifications (For Cursor)

This document consolidates all clarifications for implementing the Premium Poll, Premium Overview Page, and UI updates in **MadLibsMagic**.  
Provide this directly to Cursor to enable correct implementation.

---

# ✅ 1. Component vs Markdown — Which Content to Use?

**Use the full markdown content in the React Premium page component.**  
The React component should include:

- Full **Free vs Premium comparison table**  
- All **six “Premium Unlocks” sections**  
- The playful, polished tone  
- FAQ section  
- The reassurance section (“MadLibsMagic will always stay free”)  

**Reason:**  
Users considering premium need the full overview, not an abbreviated version.

---

# ✅ 2. Tone & Messaging

The React component **should use the playful, fun, but not childish tone** from the markdown.

Tone guide:

- Fun  
- Friendly  
- Startup‑polished  
- Not juvenile  
- Not overly corporate  

This keeps MadLibsMagic’s personality intact.

---

# ✅ 3. Database Specification

**Poll table exists** — `poll_responses`.

Cursor should:

```sql
.schema poll_responses
```

If `suggestions` column is missing, add:

```sql
ALTER TABLE poll_responses ADD COLUMN suggestions TEXT;
```

**Migration Method:**  
- Apply manually in Turso shell  
- Document in `docs/internal/db_changes.md`  
- Do *not* introduce Turso migrations at this stage

---

# ✅ 4. Suggestions Field Behavior

### Required?
❌ No — optional.

### Character Limit?
✔️ 500 characters.

### Sanitization?
✔️ Strip HTML tags  
✔️ Strip `<script>` or embedded JS  
✔️ Trim whitespace  
✔️ Ensure safe insertion into SQLite via parameterized queries

---

# ✅ 5. Existing File Confirmation

All the following files already exist and should be updated, **not recreated**:

- `src/components/PremiumPollForm.js`
- `src/app/premium-poll/page.js`
- `src/components/Navbar.js`
- All madlib creation pages  
- Poll API route

Cursor should update them safely.

---

# ✅ 6. Navbar Placement

Add **Premium** link *right after* **Create MadLib**.

### Final Navbar Order

1. Home  
2. Categories  
3. **Create MadLib**
4. **Premium** ← add here  
5. (Any other existing links)

This placement is intentional for visibility and flow.

---

# ✅ 7. Poll Page Description Text

Use the updated, playful description from the markdown file.

Underneath the description, add:

**See everything coming in Premium →**  
*Links to `/premium`*

The shorter snippet previously shown was a placeholder.

---

# ✅ 8. Implementation Flow Summary (For Cursor)

Cursor should proceed with the following:

1. Update the poll form to include:
   - Optional suggestions textarea
   - 500 char limit
   - Sanitization logic

2. Update API route to accept `suggestions`.

3. Confirm DB schema, and if needed, run the manual SQL migration.

4. Replace poll page intro text with the long markdown explanation.

5. Add “Premium” link to navbar.

6. Generate the Premium Overview page as a React component containing:
   - Full feature table  
   - Six premium unlocks  
   - FAQ  
   - Reassurance section  
   - Playful tone throughout  

---

# 🎉 This Document Is Complete

You can now hand this file directly to Cursor.

