// src/app/madlibs/page.js

"use client";
import Link from "next/link";
import { madlibs } from "./madlibsData";

export default function MadLibsPage() {
  // Group stories by category
  const categories = [...new Set(madlibs.map((madlib) => madlib.category))];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Choose a MadLib Story</h1>

      {categories.map((category) => (
        <div key={category} className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600">{category}</h2>
          <ul className="list-disc ml-6 mt-2">
            {madlibs
              .filter((madlib) => madlib.category === category)
              .map((madlib) => (
                <li key={madlib.id}>
                  <Link href={`/madlibs/${madlib.id}`} className="text-lg text-blue-500 hover:underline">
                    {madlib.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
