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
        console.log('Loaded JSON:', data);
  
        if (data.length > 0) {
          const randomStory = data[Math.floor(Math.random() * data.length)];
          console.log('Selected Story:', randomStory);
  
          let filledStory = randomStory.template;
  
          // Extract user inputs from search params
          const userInputs = Object.fromEntries(searchParams.entries());
          console.log('User Inputs:', userInputs);
  
          // Replace placeholders with user input values
          Object.keys(userInputs).forEach(key => {
            const placeholder = `{${key}}`;
            console.log(`Replacing ${placeholder} with ${userInputs[key]}`);
            filledStory = filledStory.replace(new RegExp(placeholder, 'g'), userInputs[key] || `(${key})`);
          });
  
          console.log('Final Story:', filledStory);
          
          // 🚀 ADD A CHECK BEFORE SETTING STATE
          if (filledStory && filledStory.trim().length > 0) {
            setStory(filledStory);
          } else {
            console.error("Story did not update properly:", filledStory);
          }
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading story:', err);
        setLoading(false);
      });
  }, [category, searchParams]);
  
  

  const handleNewStory = () => {
    router.replace(`/madlibs/${category}/story?${searchParams.toString()}`);
  };
  

  const handleEditForm = () => {
    router.push(`/madlibs/${category}/form?${searchParams.toString()}`);
  };
  

  console.log("Rendered Story in State:", story);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Your Mad Libs Story</h1>
      {loading ? (
        <p className="text-center">Loading story...</p>
      ) : story ? (  // ✅ Ensure `story` is not empty before displaying
        <div className="bg-gray-100 p-4 rounded shadow-md">
        <p className="text-black dark:text-black text-lg whitespace-pre-line">{story}</p>  {/* ✅ Fix formatting */}
          <div className="flex gap-4 mt-4">
            <button onClick={handleNewStory} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              New Story
            </button>
            <button onClick={handleEditForm} className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded">
              New Form
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-red-500">⚠️ No story generated. Try again.</p> // 🚨 Error message
      )}
    </div>
    );
  }
