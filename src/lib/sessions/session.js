'use server';

import { cookies } from 'next/headers';

export function saveStoryToSession(storyText) {
  const cookieStore = cookies();
  cookieStore.set('customStory', storyText, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24
  });
}

export function getStoryFromSession() {
  const cookieStore = cookies();
  return cookieStore.get('customStory')?.value || null;
}

