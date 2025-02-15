// src/app/madlibs/[id]/page.js

"use client";
import { useParams } from "next/navigation";
import { madlibs } from "../madlibsData";
import { useState } from "react";

export default function MadLibPage() {
  const { id } = useParams();
  const madlib = madlibs.find((m) => m.id === id);

  if (!madlib) return <p className="text-center mt-6">MadLib not found.</p>;

  // Extract placeholders from the template
  const placeholderRegex = /{(.*?)}/g;
  const placeholders = [...new Set(madlib.template.match(placeholderRegex)?.map((p) => p.replace(/[{}]/g, "")) || [])];

  // State for input fields
  const [inputs, setInputs] = useState(Object.fromEntries(placeholders.map((p) => [p, ""])));
  const [showStory, setShowStory] = useState(false);

  // Function to replace placeholders dynamically
  const fillMadLib = () => {
    let filledTemplate = madlib.template;
    Object.keys(inputs).forEach((key) => {
      const value = inputs[key] || `[${key}]`; // Show [placeholder] if empty
      filledTemplate = filledTemplate.replace(new RegExp(`{${key}}`, "g"), value);
    });
    return filledTemplate;
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold">{madlib.title}</h1>
      <p className="text-lg italic mb-4 text-blue-600">{madlib.category} Story</p>

      {!showStory ? (
        <form className="space-y-4">
          {placeholders.map((key) => (
            <input
              key={key}
              type="text"
              name={key}
              placeholder={`Enter a ${key}`}
              value={inputs[key]}
              onChange={(e) => setInputs({ ...inputs, [key]: e.target.value })}
              className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
            />
          ))}

          {/* Submit Button */}
          <button
            type="button"
            onClick={() => setShowStory(true)}
            className="bg-green-500 text-white px-4 py-2 rounded w-full"
          >
            Generate Story
          </button>
        </form>
      ) : (
        <div>
          <div className="story-card mt-6">{fillMadLib()}</div>
          <button
            onClick={() => setShowStory(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-4"
          >
            Edit Words
          </button>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-500 text-white px-4 py-2 rounded w-full mt-2"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}
