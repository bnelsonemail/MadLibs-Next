# Database Schema Changes

This document tracks all database schema changes for MadLibs Magic.

## Migration History

### 2025-11-18: Add suggestions column to poll_results

**Purpose:** Add support for users to suggest premium features in the poll form.

**Table:** `poll_results`

**Migration SQL:**
```sql
ALTER TABLE poll_results ADD COLUMN suggestions TEXT;
```

**Applied:** Manual execution in Turso shell required

**Notes:**
- Field is optional (nullable)
- Maximum 500 characters enforced at application level
- Sanitization applied in API route to strip HTML/script tags
- Used in Premium Poll feature to collect user feature requests

**Related Files:**
- `src/components/PremiumPollForm.js`
- `src/app/api/poll/route.js`

---

## How to Apply Migrations

1. Connect to Turso shell:
   ```bash
   turso db shell <database-name>
   ```

2. Check current schema:
   ```sql
   .schema poll_results
   ```

3. Apply migration SQL (see above)

4. Verify changes:
   ```sql
   .schema poll_results
   ```

5. Update this document with "Applied: [date]" once migration is complete

