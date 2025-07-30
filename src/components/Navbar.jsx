import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ difficulty, setDifficulty }) => {
  const difficulties = ["easy", "medium", "hard"];
  const [showLabel, setShowLabel] = useState(window.innerWidth > 425);

  useEffect(() => {
    const handleResize = () => setShowLabel(window.innerWidth > 425);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-purple-900 text-white px-4 py-3 shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Left Section */}
        <div className="flex items-center flex-wrap gap-3 sm:gap-4">
          <Link
            to="/"
            className="text-lg sm:text-xl font-semibold hover:underline whitespace-nowrap"
          >
            🏠 Home
          </Link>

          {showLabel && (
            <label
              htmlFor="difficulty-select"
              className="hidden sm:inline-block font-medium"
            >
              Filter by Difficulty:
            </label>
          )}

          <select
            id="difficulty-select"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value.toLowerCase())}
            className="text-black text-sm p-2 rounded shadow w-28 sm:w-36"
            aria-label="Filter by difficulty"
          >
            <option value="">All</option>
            {difficulties.map((d) => (
              <option key={d} value={d}>
                {d.charAt(0).toUpperCase() + d.slice(1)}
              </option>
            ))}
          </select>

          <a
            href="https://javascript-questions.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow transition whitespace-nowrap"
          >
            🚀 More Quiz
          </a>
        </div>

        {/* Right Section */}
        <div className="text-xs sm:text-sm italic text-gray-200 whitespace-nowrap">
          JavaScript Quiz App
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
