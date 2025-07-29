import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-purple-900 text-white px-4 py-3 shadow-md sticky top-0 z-50">
            <div className="max-w-4xl mx-auto flex justify-between items-center w-full">
                <div className="flex gap-6 items-center">
                    <Link to="/" className="text-xl font-semibold hover:underline">
                        🏠 Home
                    </Link>
                    <a
                        href="https://javascript-questions.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow transition duration-300"
                    >
                        🚀 More Quiz
                    </a>
                </div>
                <span className="text-sm italic hidden sm:block">
                    JavaScript Quiz App
                </span>
            </div>
        </nav>
    );
};

export default Navbar