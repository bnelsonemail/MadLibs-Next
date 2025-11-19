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

