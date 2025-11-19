
# Cursor Clarification Answers — MadLib Creation & Session Feature

## 1. Current File States

### 1.1 Does `src/app/madlibs/page.js` exist?
Yes. It already exists and renders the MadLib category selection screen.

It contains:
- Page title
- Category buttons
- Footer
- No Create-MadLib workflow logic

### 1.2 Does `src/app/madlibs/new/page.js` exist?
Yes.  
It already contains a form for creating a custom MadLib.

The form includes:
- Story template textarea
- Text inputs for placeholders (noun, verb, adjective, etc.)

### 1.3 Navbar Implementation
Navbar file:
```
src/components/Navbar.js
```

It contains:
- View MadLibs
- Create MadLib
- Light/Dark toggle

Keep the existing Create MadLib link in the navbar.

---

## 2. Form Structure & Logic

### 2.1 Form fields
Use existing fields:
- Template textarea
- Placeholder text inputs

No form restructuring is required.

### 2.2 Story template format
User supplies a story template using:
```
{placeholder}
```

Example:
```
Today I saw a {adjective} {noun} at the {place}.
```

### 2.3 Placeholder inputs
Users already provide these through existing UI.  
No additional steps required.

---

## 3. Import Path Alias

Use:
```
@/lib/sessions/session
```

NOT:
```
@/src/lib/sessions/session
```

Alias rule:
```
"paths": {
  "@/*": ["./src/*"]
}
```

---

## 4. Next.js Version

Using **Next.js 13+ with App Router**.

Supports:
```js
import { cookies } from 'next/headers';
```

---

## 5. API Route Endpoint

Intended endpoint:
```
/madlibs/new/api
```

File location:
```
src/app/madlibs/new/api/route.js
```

Do not change route location.

---

## 6. Missing Feature Clarifications

### 6.1 Save/share custom stories?
No — not part of this feature.  
Session-based only.

### 6.2 Should result page have “Create Another MadLib”?
Yes → link to:
```
/madlibs/new
```

### 6.3 Print/share buttons needed?
No.

---

## 7. Category Buttons Reference

Categories include:
- Biblical  
- Detective  
- Medical Thriller  
- Medieval  
- Pirate  
- Shadow Hunter  
- Star Trek  
- Star Wars  
- Superhero  
- Surprise Me!

Place the new Create-MadLib CTA **above** these buttons, centered.

---

## 8. Should Cursor explore the repo?
No.  
All required info has been provided.

---

# End of Clarification File
