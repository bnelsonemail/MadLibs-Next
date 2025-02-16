// File: src/app/madlibs/[category]/[id]/page.js

'use client'
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function MadLibsStory({ params }) {
  const { category, id } = params;
  const searchParams = useSearchParams();
  const router = useRouter();
  const [story, setStory] = useState(null);
  const [userInputs, setUserInputs] = useState({});

  useEffect(() => {
    const inputs = {};
    searchParams.forEach((value, key) => {
      inputs[key] = value;
    });
    setUserInputs(inputs);

    fetch(`/stories/${category.toLowerCase()}_stories.json`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          const selectedStory = data.find(story => story.id == id) || data[Math.floor(Math.random() * data.length)];
          setStory(selectedStory);
        }
      })
      .catch(err => console.error('Error loading story:', err));
  }, [category, id, searchParams]);

  const renderStory = () => {
    if (!story) return '';
    let filledStory = story.template;
    Object.keys(userInputs).forEach(key => {
      const regex = new RegExp(`{${key}}`, 'g');
      filledStory = filledStory.replace(regex, userInputs[key]);
    });
    return filledStory;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Your MadLib Story</h1>
      {story ? (
        <p className="border p-4 bg-gray-100 rounded">{renderStory()}</p>
      ) : (
        <p>Loading story...</p>
      )}
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => router.replace(`/madlibs/${category}/${id}?${searchParams}`)}
          className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
        >
          New Story
        </button>
        <button
          onClick={() => router.push(`/madlibs/${category}/form?${searchParams}`)}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Edit
        </button>
      </div>
    </div>
  );
}
