import { getStoryFromSession } from '@/lib/sessions/session';

export default function MadLibStoryResult() {
  const story = getStoryFromSession();

  if (!story) {
    return (
      <div className="text-center mt-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">No story found</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Create a story first!
        </p>
        <a
          href="/madlibs/new"
          className="inline-block mt-4 px-6 py-3 rounded-md font-semibold 
                     bg-green-600 hover:bg-green-700 text-white 
                     dark:bg-green-500 dark:hover:bg-green-600
                     transition"
        >
          Create a MadLib
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 
                    bg-gray-100 dark:bg-gray-800 
                    rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Your Custom MadLib</h1>
      <p className="whitespace-pre-wrap text-lg text-gray-700 dark:text-gray-300">{story}</p>
      
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

