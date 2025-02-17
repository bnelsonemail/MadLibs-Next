// File: src/app/madlibs/[category]/form/page.js

'use client'
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function MadLibsForm() {
  const params = useParams();
  const category = params?.category;
  const [placeholders, setPlaceholders] = useState([]);
  const [formData, setFormData] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (!category) return;

    const decodedCategory = decodeURIComponent(category).trim();
    const formattedCategory = decodedCategory.replace(/\s+/g, "").toLowerCase(); // Remove spaces
    const url = `/stories/${formattedCategory}Stories.json`;

    console.log("Fetching:", url); // Debugging log
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load: ${url} (Status: ${res.status})`);
        return res.json();
      })
      .then(data => {
        console.log("Loaded JSON:", data);
        if (data.length > 0) {
          setPlaceholders(data[0].prompts || []);
          // Preserve previous inputs if returning from edit mode
          const savedInputs = Object.fromEntries(data[0].prompts.map(p => [p, '']));
          setFormData(prev => ({ ...savedInputs, ...prev }));
        }
      })
      .catch(err => console.error("Error loading placeholders:", err));

  }, [category]); // Remove `placeholders` from dependency array (prevents infinite loop)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/madlibs/${category}/story?${new URLSearchParams(formData)}`);
  };

  const handleClear = () => {
    setFormData(Object.fromEntries(placeholders.map(p => [p, ''])));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Fill in the blanks!</h1>
      {placeholders.length > 0 ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {placeholders.map(placeholder => (
            <input
              key={placeholder}
              name={placeholder}
              value={formData[placeholder] || ''}
              onChange={handleChange}
              placeholder={placeholder}
              className="border p-2 rounded text-black"
            />
          ))}
          <div className="flex gap-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Submit
            </button>
            <button type="button" onClick={handleClear} className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded">
              Clear
            </button>
          </div>
        </form>
      ) : (
        <p className="text-center">Loading form...</p>
      )}
    </div>
  );
}
