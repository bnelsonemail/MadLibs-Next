# Cursor Instructions — Upgrading the “Create a MadLib” Editor

## Goal
Transform the current “Create MadLib” page into a flexible editor where users can:
- Add unlimited placeholders (noun, verb, adjective, custom)
- Reuse the same placeholder multiple times inside the story text
- Auto-generate a dynamic form based on detected placeholders
- Prepare the UI for future premium features

---

## 1. Add a Dynamic Placeholder Creator
Implement a small input + button:
- Users type a placeholder name (e.g., noun1, hero, weapon, color)
- Validate / sanitize: lowercase, no spaces, only safe characters
- Add a chip for that placeholder
- Clicking the chip inserts `{placeholder}` into the story textarea at the cursor position

---

## 2. Automatically Detect All Placeholders in Story
Use this regex:
```
/\{([^}]+)\}/g
```
Extract the placeholder names.  
Important:
- Deduplicate the list (noun1 appearing 5 times still represents one input)
- Rebuild the input form dynamically each time the user edits

---

## 3. Allow Unlimited Placeholder Reuse
When generating the final story:
- Iterate through all placeholders detected
- Replace **all** instances of each one:
```
story.replaceAll(`{${key}}`, userValues[key])
```
No need to create `{noun2}`, `{noun3}` manually—users can reuse `{noun1}` as often as they want.

---

## 4. UI Enhancements
Recommended structure:

### Template Section
- Large textarea for story
- Insert placeholder chips below it

### Placeholder Section
- Input + “Add Placeholder”
- List of existing placeholders as chips

### Auto-Generated Form
- One input per placeholder detected in the story

### Submit Section
- “Generate MadLib”
- “Reset Story”
- “Preview Inputs” (future)

Make sure styles follow your dark mode + Tailwind setup:
- `text-gray-200 dark:text-gray-100`
- `bg-gray-900 dark:bg-gray-800`
- Buttons: `bg-blue-600 dark:bg-blue-500`

---

## 5. Server Action Updates
Your server action should:
1. Receive `template` and all dynamic placeholder values.
2. Extract placeholders using the regex.
3. Replace each `{placeholder}` with its corresponding value.
4. Save story to cookie:
```
cookies().set("generatedMadlib", finalStory);
```
5. Redirect to `/madlibs/new/result`

This fixes the redirect + persistence issues.

---

## 6. Result Page Fix
On `/madlibs/new/result`:
- Read cookie
- Display the generated story
- Add buttons:
```
<Link href="/madlibs/new">Create Another</Link>
<Link href="/madlibs">Back to Categories</Link>
```

---

## 7. Placeholder Category System (Future / Premium)
Add a disabled UI panel with greyed-out buttons:
“Create custom placeholder categories (coming soon)”
“Save templates to your account (premium)”
“Upload templates (premium)”

This sets you up for a clean upgrade path.

---

## 8. Validation
Add checks before generating:
- Ensure at least one placeholder exists
- Ensure all placeholder inputs have values
- Ensure template is not empty

On failure, show a friendly toast.

---

## 9. Suggested Component Structure
```
/components
  PlaceholderChip.js
  PlaceholderCreator.js
  PlaceholderForm.js
  StoryEditor.js
  StoryPreview.js
```

---

## 10. Optional: Import/Export Templates
For later:
- Save the template JSON to localStorage
- Allow exporting as JSON file
- Users can reload their custom templates
