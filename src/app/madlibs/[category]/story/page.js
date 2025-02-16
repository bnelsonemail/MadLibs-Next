// File: src/app/madlibs/[category]/story/page.js

'use client'
import { useState, useEffect } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';

export default function MadLibsStory() {
  const params = useParams();
  const category = params?.category;
  const searchParams = useSearchParams();
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!category) return;
  
    const decodedCategory = decodeURIComponent(category).trim();
    const formattedCategory = decodedCategory.replace(/\s+/g, '');
    const url = `/stories/${formattedCategory}Stories.json`;
  
    fetch(url)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`Failed to load: ${url} (Status: ${res.status})`);
        }
        return res.json();
      })
      .then(data => {
        if (data.length > 0) {
          const randomStory = data[Math.floor(Math.random() * data.length)];
          let filledStory = randomStory.template;
  
          // 🛠️ Convert searchParams to an object
          const userInputs = Object.fromEntries(searchParams.entries());
  
          // 🛠️ Replace placeholders with user input values
          Object.keys(userInputs).forEach(key => {
            const placeholder = `{${key}}`;
            filledStory = filledStory.replaceAll(placeholder, userInputs[key] || `(${key})`);
          });
  
          setStory(filledStory);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading story:', err);
        setLoading(false);
      });
  }, [category, searchParams]);
  

  const handleNewStory = () => {
    router.reload(); // Reload the page to get a new story with the same words
  };

  const handleEditForm = () => {
    router.push(`/madlibs/${category}/form?${searchParams.toString()}`);
  };
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Your Mad Libs Story</h1>
      {loading ? (
        <p className="text-center">Loading story...</p>
      ) : (
        <div className="bg-gray-100 p-4 rounded shadow-md">
          <p className="text-lg">{story}</p>
          <div className="flex gap-4 mt-4">
            <button onClick={handleNewStory} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              New Story
            </button>
            <button onClick={handleEditForm} className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded">
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
