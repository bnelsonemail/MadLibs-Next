// File: src/app/madlibs/[category]/story/page.jsx

'use client'
import { useState, useEffect } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';

// Map URL-safe category names to actual file names
const getCategoryFileName = (category) => {
  const categoryMap = {
    'biblical': 'biblicalStories.json',
    'detective': 'detectiveStories.json', 
    'medical thriller': 'medicalThrillerStories.json',
    'medieval': 'medievalStories.json',
    'pirate': 'pirateStories.json',
    'shadow hunter': 'shadowHunterStories.json',
    'star trek': 'starTrekStories.json',
    'star wars': 'starWarsStories.json',
    'superhero': 'superheroStories.json'
  };
  
  const decodedCategory = decodeURIComponent(category).trim().toLowerCase();
  return categoryMap[decodedCategory] || `${decodedCategory.replace(/\s+/g, '')}Stories.json`;
};

export default function MadLibsStory() {
  const params = useParams();
  const category = params?.category;
  const searchParams = useSearchParams();
  const [story, setStory] = useState('');
  const [stories, setStories] = useState([]);  // Store all stories
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!category) return;
  
    const fileName = getCategoryFileName(category);
    const url = `/stories/${fileName}`;
  
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
          setStories(data); // Store all stories
          generateStory(data); // Generate an initial story
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading story:', err);
        setLoading(false);
      });
  }, [category]);

  const generateStory = (storiesList) => {
    if (storiesList.length === 0) return;

    const randomStory = storiesList[Math.floor(Math.random() * storiesList.length)];
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
    
    // ✅ Only update if the story is valid
    if (filledStory.trim().length > 0) {
      setStory(filledStory);
    }
  };

  // ✅ This changes the story **without reloading the page**
  const handleNewStory = () => {
    if (stories.length > 0) {
      generateStory(stories);
    }
  };

  // ✅ "New Form" redirects while keeping the user's inputs
  const handleNewForm = () => {
    router.push(`/madlibs/${category}/form?${searchParams.toString()}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Your Mad Libs Story</h1>
      {loading ? (
        <p className="text-center">Loading story...</p>
      ) : story ? (
        <div className="bg-gray-100 p-4 rounded shadow-md">
          <p className="text-black dark:text-black text-lg whitespace-pre-line">{story}</p>
          <div className="flex gap-4 mt-4">
            <button onClick={handleNewStory} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              New Story
            </button>
            <button onClick={handleNewForm} className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded">
              New Form
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-red-500">⚠️ No story generated. Try again.</p>
      )}
    </div>
  );
}
