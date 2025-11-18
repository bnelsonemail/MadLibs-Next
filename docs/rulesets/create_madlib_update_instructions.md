# 🛠️ Cursor Instructions — MadLib Creation Workflow, UI Updates, and Session Fix

This file provides Cursor with all required instructions to update:
- UI placement of the **Create MadLib** button
- Add a second CTA in the main page
- Implement proper **Next.js session storage**
- Fix the redirect bug after submission
- Ensure **light/dark mode compatibility**

---

## ✅ 1. Move the "Create MadLib" Button Into Main Content

Modify:

```
src/app/madlibs/page.js
```

Add a new CTA button below the title and above the category buttons:

```jsx
<div className="flex justify-center mb-8">
  <a
    href="/madlibs/new"
    className="px-6 py-3 rounded-md font-semibold 
               bg-green-600 hover:bg-green-700 text-white 
               dark:bg-green-500 dark:hover:bg-green-600
               transition"
  >
    Create Your Own MadLib
  </a>
</div>
```

**Important:**  
Do NOT remove the Create MadLib link from the navbar.

---

## ✅ 2. Implement Sessions for Custom Story Generation

Create folder:

```
src/lib/sessions/
```

Create:

### 📄 `src/lib/sessions/session.js`

```js
'use server';

import { cookies } from 'next/headers';

export async function saveStoryToSession(storyText) {
  const cookieStore = await cookies();
  cookieStore.set('customStory', storyText, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24
  });
}

export async function getStoryFromSession() {
  const cookieStore = await cookies();
  return cookieStore.get('customStory')?.value || null;
}
```

---

## ✅ 3. Update Custom MadLib Submit Logic

Modify:

```
src/app/madlibs/new/page.js
```

Add:

```jsx
'use client';

import { useState } from 'react';

export default function CreateMadLibPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const res = await fetch('/madlibs/new/api', {
      method: 'POST',
      body: formData
    });

    if (res.ok) {
      window.location.href = '/madlibs/new/result';
    } else {
      alert('Error creating MadLib');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* existing form JSX */}
    </form>
  );
}
```

---

## ✅ 4. Create API Route to Generate Story

Create:

```
src/app/madlibs/new/api/route.js
```

```js
import { NextResponse } from 'next/server';
import { saveStoryToSession } from '@/lib/sessions/session';

export async function POST(req) {
  const form = await req.formData();
  const storyTemplate = form.get('storyTemplate');

  let story = storyTemplate;
  for (const [key, value] of form.entries()) {
    if (key !== 'storyTemplate') {
      story = story.replaceAll(`{${key}}`, value);
    }
  }

  await saveStoryToSession(story);

  return NextResponse.json({ success: true });
}
```

---

## ✅ 5. Create Story Result Page

Create:

```
src/app/madlibs/new/result/page.js
```

```jsx
import { getStoryFromSession } from '@/lib/sessions/session';

export default async function MadLibStoryResult() {
  const story = await getStoryFromSession();

  if (!story) {
    return (
      <div className="text-center mt-12">
        <h2 className="text-xl font-semibold">No story found</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Create a story first!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 
                    bg-gray-100 dark:bg-gray-800 
                    rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4">Your Custom MadLib</h1>
      <p className="whitespace-pre-wrap text-lg">{story}</p>
      
      <div className="flex justify-center mt-8">
        <a
          href="/madlibs/new"
          className="px-6 py-3 rounded-md font-semibold 
                     bg-green-600 hover:bg-green-700 text-white 
                     dark:bg-green-500 dark:hover:bg-green-600
                     transition"
        >
          Create Another MadLib
        </a>
      </div>
    </div>
  );
}
```

---

## 🎨 6. Styling Requirements (Light + Dark Mode)

Apply:

### **Buttons**
```
Light: bg-green-600 hover:bg-green-700 text-white  
Dark:  dark:bg-green-500 dark:hover:bg-green-600
```

### **Containers**
```
Light: bg-gray-100  
Dark:  bg-gray-800
```

### **Text**
```
Light: text-gray-700  
Dark:  text-gray-300
```

---

## 🎯 Final Result

Cursor will:

- Add the new CTA button in the content section  
- Keep the navbar link  
- Implement session-based custom story handling  
- Fix the redirect  
- Build a real result page  
- Support light/dark mode automatically  

This completes the entire Create-MadLib feature fix.

