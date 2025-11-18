// src/app/madlibs/new/page.js

"use client";
import { useState } from "react";

const placeholders = ["noun1", "noun2", "verb1", "verb2", "adjective1", "adjective2", "color1", "color2"];

export default function NewMadLibPage() {
  const [template, setTemplate] = useState("");
  const [usedPlaceholders, setUsedPlaceholders] = useState([]); // Track used placeholders
  const [inputs, setInputs] = useState({}); // Store user inputs for placeholders
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to insert placeholders into the template
  const insertPlaceholder = (placeholder) => {
    // If already used, do nothing
    if (usedPlaceholders.includes(placeholder)) return;

    // Insert placeholder at the current cursor position
    const textarea = document.getElementById("madlib-textarea");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newText = template.slice(0, start) + ` {${placeholder}} ` + template.slice(end);
    setTemplate(newText);

    // Mark placeholder as used
    setUsedPlaceholders([...usedPlaceholders, placeholder]);
  };

  const handleInputChange = (placeholder, value) => {
    setInputs({...inputs, [placeholder]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!template.trim()) {
      setError("Template is required!");
      setLoading(false);
      return;
    }

    // Check if all used placeholders have values
    for (const placeholder of usedPlaceholders) {
      if (!inputs[placeholder]?.trim()) {
        setError(`Please fill in all placeholders: ${placeholder} is missing`);
        setLoading(false);
        return;
      }
    }

    const formData = new FormData();
    formData.append('storyTemplate', template);
    
    // Add all input values
    usedPlaceholders.forEach(placeholder => {
      formData.append(placeholder, inputs[placeholder]);
    });

    const res = await fetch('/madlibs/new/api', {
      method: 'POST',
      body: formData
    });

    if (res.ok) {
      window.location.href = '/madlibs/new/result';
    } else {
      setError('Error creating MadLib');
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Create a New MadLib</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Template Textbox */}
        <textarea
          id="madlib-textarea"
          placeholder="Type your story here... Click buttons to insert placeholders."
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          className="w-full p-3 border rounded min-h-[120px] 
                     bg-white dark:bg-gray-800 
                     text-gray-900 dark:text-gray-100
                     border-gray-300 dark:border-gray-600"
        />

        {/* Placeholder Buttons */}
        <div className="flex flex-wrap gap-2">
          {placeholders.map((placeholder) => (
            <button
              key={placeholder}
              type="button"
              onClick={() => insertPlaceholder(placeholder)}
              disabled={usedPlaceholders.includes(placeholder)} // Disable button if used
              className={`px-3 py-1 rounded border ${
                usedPlaceholders.includes(placeholder) 
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed dark:bg-gray-600 dark:text-gray-400" 
                  : "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
              }`}
            >
              {placeholder}
            </button>
          ))}
        </div>

        {/* Input fields for used placeholders */}
        {usedPlaceholders.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-gray-300 dark:border-gray-600">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Fill in your words:</h2>
            {usedPlaceholders.map((placeholder) => (
              <input
                key={placeholder}
                type="text"
                placeholder={`Enter ${placeholder}`}
                value={inputs[placeholder] || ''}
                onChange={(e) => handleInputChange(placeholder, e.target.value)}
                className="w-full p-2 border rounded
                           bg-white dark:bg-gray-800
                           text-gray-900 dark:text-gray-100
                           border-gray-300 dark:border-gray-600"
              />
            ))}
          </div>
        )}

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white 
                     dark:bg-green-500 dark:hover:bg-green-600
                     px-4 py-2 rounded w-full font-semibold
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition"
        >
          {loading ? 'Creating...' : 'Generate MadLib'}
        </button>
      </form>
    </div>
  );
}
