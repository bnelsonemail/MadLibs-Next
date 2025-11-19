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

