// src/app/context/MadLibContext.js

"use client";
import { createContext, useContext, useState } from "react";

// Create Context
const MadLibsContext = createContext();

// Provider Component
export function MadLibsProvider({ children }) {
  const [madlibs, setMadlibs] = useState([
    {
      id: "1",
      title: "A Wild Adventure",
      template:
        "One day, a {adjective1} {noun1} met a {adjective2} {noun2} in the {color1} forest. They decided to {verb1} together until sunset. Suddenly, a {color2} dragon appeared and {verb2} them into the sky!",
    },
    {
      id: "2",
      title: "Space Battle",
      template:
        "Captain {noun1}, with their {adjective1} spaceship, flew across the {color1} galaxy. Suddenly, they saw a {adjective2} alien {noun2} trying to {verb1} their ship. Thinking fast, they used a {color2} laser to {verb2} the enemy!",
    }
  ]);

  // Function to Add a New MadLib
  const addMadLib = (title, template) => {
    const newMadLib = { id: String(Date.now()), title, template };
    setMadlibs([...madlibs, newMadLib]);
  };

  // Function to Delete a MadLib
  const deleteMadLib = (id) => {
    setMadlibs(madlibs.filter((madlib) => madlib.id !== id));
  };

  return (
    <MadLibsContext.Provider value={{ madlibs, addMadLib, deleteMadLib }}>
      {children}
    </MadLibsContext.Provider>
  );
}

// Custom Hook for Using the Context
export function useMadLibs() {
  return useContext(MadLibsContext);
}
