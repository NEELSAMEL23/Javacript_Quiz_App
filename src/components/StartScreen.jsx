// src/components/StartScreen.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const StartScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-700 to-orange-500 text-white">
            <main className="flex-grow flex flex-col justify-center items-center px-4">
                <h1 className="text-4xl font-bold mb-4">JavaScript Questions</h1>
                <p className="mb-6 text-center">Test your JS knowledge: from beginner to advanced!</p>
                <button
                    className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200"
                    onClick={() => navigate("/quiz/1")}
                >
                    Start
                </button>
            </main>
        </div>
    );
};

export default StartScreen;
