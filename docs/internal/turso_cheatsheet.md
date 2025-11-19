# 🧙‍♂️ Turso SQL Cheat Sheet — *MadLibsMagic Edition*

This cheat sheet is everything you need to query, inspect, and clean your **poll_results** database from the terminal.

## 📌 Connect to the Database

```bash
turso db shell madlibs-poll
```

You’ll see:

```
Connected to madlibs-poll ...
→
```

That arrow means you’re inside the SQL shell.

---

# 📋 View Table Structure

### Show all tables:
```sql
.tables;
```

### Inspect poll_results columns:
```sql
PRAGMA table_info('poll_results');
```

---

# 🔍 Querying Poll Responses

### Select all responses:
```sql
SELECT * FROM poll_results;
```

### Select the newest submissions first:
```sql
SELECT * FROM poll_results ORDER BY id DESC;
```

### Select only premium interest:
```sql
SELECT * FROM poll_results WHERE wants_premium = 1;
```

### Price point distribution:
```sql
SELECT price_point, COUNT(*) 
FROM poll_results 
GROUP BY price_point 
ORDER BY COUNT(*) DESC;
```

### View Suggestions Only:
```sql
SELECT id, suggestions 
FROM poll_results 
WHERE suggestions IS NOT NULL AND suggestions != '';
```

---

# 🗑️ Deleting Records

### Delete a specific entry:
```sql
DELETE FROM poll_results WHERE id = 1;
```

### Delete ALL poll data:
```sql
DELETE FROM poll_results;
```

### Reset autoincrement counter:
```sql
DELETE FROM sqlite_sequence WHERE name='poll_results';
```

---

# 🛠️ Updating Records

### Update a comment:
```sql
UPDATE poll_results
SET comment = 'Updated comment'
WHERE id = 5;
```

### Update a price point:
```sql
UPDATE poll_results
SET price_point = '$10'
WHERE id = 8;
```

---

# 📤 Export Data

### Export whole table as JSON:
```sql
SELECT json_group_array(json_object(
  'id', id,
  'wants_premium', wants_premium,
  'price_point', price_point,
  'comment', comment,
  'suggestions', suggestions,
  'created_at', created_at
)) 
FROM poll_results;
```

---

# 🚪 Exit the SQL Shell

```sql
.quit
```

---

# 🚀 Useful One-Liners

### Count all responses:
```sql
SELECT COUNT(*) FROM poll_results;
```

### Count premium interest:
```sql
SELECT COUNT(*) FROM poll_results WHERE wants_premium = 1;
```

### Latest 5 submissions:
```sql
SELECT * FROM poll_results ORDER BY id DESC LIMIT 5;
```
