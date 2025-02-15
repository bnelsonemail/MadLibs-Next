// src/app/madlibs/new/page.js

"use client";
import { useState } from "react";
import { useMadLibs } from "@/context/MadLibsContext";
import { useRouter } from "next/navigation";

const placeholders = ["noun1", "noun2", "verb1", "verb2", "adjective1", "adjective2", "color1", "color2"];

export default function NewMadLibPage() {
  const { addMadLib } = useMadLibs();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [template, setTemplate] = useState("");
  const [usedPlaceholders, setUsedPlaceholders] = useState([]); // Track used placeholders
  const [error, setError] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !template.trim()) {
      setError("Title and template are required!");
      return;
    }
    addMadLib(title, template);
    router.push("/madlibs");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Create a New MadLib</h1>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <input
          type="text"
          placeholder="MadLib Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {/* Template Textbox */}
        <textarea
          id="madlib-textarea"
          placeholder="Type your story here... Click buttons to insert placeholders."
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          className="w-full p-3 border rounded min-h-[120px]"
        />

        {/* Placeholder Buttons */}
        <div className="flex flex-wrap gap-2">
          {placeholders.map((placeholder) => (
            <button
              key={placeholder}
              type="button"
              onClick={() => insertPlaceholder(placeholder)}
              disabled={usedPlaceholders.includes(placeholder)} // Disable button if used
              className={`px-3 py-1 rounded border ${usedPlaceholders.includes(placeholder) ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}
            >
              {placeholder}
            </button>
          ))}
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">
          Add MadLib
        </button>
      </form>
    </div>
  );
}
