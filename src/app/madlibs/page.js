// File: src/app/madlibs/page.js

'use client'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const categories = [
  'Biblical', 'Detective', 'Medical Thriller', 'Medieval', 
  'Pirate', 'Shadow Hunter', 'Star Trek', 'Star Wars', 'Superhero'
];

export default function MadLibsHome() {
  const router = useRouter();

  const handleCategorySelect = (category) => {
    router.push(`/madlibs/${category.toLowerCase()}/form`);
  };

  const handleSurpriseMe = () => {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    router.push(`/madlibs/${randomCategory.toLowerCase()}/form`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Select a MadLibs Category</h1>
      
      <div className="flex justify-center mb-8 mt-6">
        <Link
          href="/madlibs/new"
          className="px-6 py-3 rounded-md font-semibold 
                     bg-green-600 hover:bg-green-700 text-white 
                     dark:bg-green-500 dark:hover:bg-green-600
                     transition"
        >
          Create Your Own MadLib
        </Link>
      </div>

      <div className="flex justify-center gap-4 my-4">
        {categories.map(category => (
          <button 
            key={category} 
            onClick={() => handleCategorySelect(category)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {category}
          </button>
        ))}
        <button 
          onClick={handleSurpriseMe}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Surprise Me!
        </button>
      </div>
    </div>
  );
}
