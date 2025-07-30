import React from "react";
import { useNavigate } from "react-router-dom";

const StartScreen = ({ total }) => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-700 to-orange-500 text-white">
            <main className="flex-grow flex flex-col justify-center items-center px-4 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    JavaScript Questions
                </h1>
                <p className="mb-4 text-base sm:text-lg md:text-xl">
                    Filtered Questions: {total}
                </p>
                <button
                    className="bg-white text-black px-6 py-2 text-sm sm:text-base rounded-lg hover:bg-gray-200 transition duration-200"
                    onClick={() => navigate("/quiz/1")}
                >
                    Start
                </button>
            </main>
            <footer className="text-center p-4 text-xs sm:text-sm">
                &copy; {new Date().getFullYear()} JavaScript Quiz App
            </footer>
        </div>
    );
};

export default StartScreen;
