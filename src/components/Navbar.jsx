import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ difficulty, setDifficulty }) => {
  const difficulties = ["easy", "medium", "hard"];
  const [showLabel, setShowLabel] = useState(window.innerWidth > 425);
  const [searchId, setSearchId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const isQuizPage = location.pathname.startsWith("/quiz");

  useEffect(() => {
    const handleResize = () => setShowLabel(window.innerWidth > 425);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const idNum = parseInt(searchId);
    if (!isNaN(idNum) && idNum > 0) {
      navigate(`/quiz/${idNum}`);
      setSearchId("");
    }
  };

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


          <select
            id="difficulty-select"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value.toLowerCase())}
            className="text-sm text-gray-800 px-4 py-2 rounded-lg shadow-sm bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200 w-32 sm:w-40"
            aria-label="Filter by difficulty"
          >
            <option value="">All</option>
            {difficulties.map((d) => (
              <option key={d} value={d}>
                {d.charAt(0).toUpperCase() + d.slice(1)}
              </option>
            ))}
          </select>


          {!isQuizPage && (
            <a
              href="https://javascript-questions.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow transition whitespace-nowrap"
            >
              🚀 More Quiz
            </a>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <div className="relative">
              <input
                type="number"
                placeholder="Go to ID"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="peer border-2 text-white w-24 sm:w-32 px-3 py-2 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition duration-200"
              />

            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:shadow-md transition duration-200 hover:scale-105 active:scale-95"
            >
              Go
            </button>
          </form>


          {/* App Title - Hide on Quiz Page */}
          {!isQuizPage && (
            <span className="text-xs sm:text-sm italic text-gray-200 whitespace-nowrap">
              JavaScript Quiz App
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
