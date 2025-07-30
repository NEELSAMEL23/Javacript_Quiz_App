import React from "react";

const QuizCard = ({ data, selected, setSelected }) => {
    const { question, options, id, answer, explanation, category, difficulty, code } = data;

    return (
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 max-w-3xl mx-auto mb-6 sm:mb-8 text-black transition-all duration-300">
            {/* Category and Difficulty */}
            <div className="mb-3 flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-600 italic gap-1">
                <span>📂 Category: {category?.toLowerCase() || "N/A"}</span>
                <span>🎯 Difficulty: {difficulty?.toLowerCase() || "N/A"}</span>
            </div>

            {/* Question */}
            <h2 className="text-base sm:text-xl font-semibold mb-3">
                Q{id}. {question}
            </h2>

            {/* Optional Code Block */}
            {code && (
                <pre className="bg-gray-100 text-xs sm:text-sm p-3 rounded overflow-x-auto mb-4 whitespace-pre-wrap">
                    {code}
                </pre>
            )}

            {/* Options */}
            {Object.entries(options).map(([key, val]) => {
                const isCorrect = key === answer;
                const isSelected = key === selected;

                return (
                    <button
                        key={key}
                        className={`w-full text-left px-3 py-2 mb-2 rounded-lg border text-sm sm:text-base transition-all duration-300
                        ${selected
                                ? isCorrect
                                    ? 'border-green-600 bg-green-100'
                                    : isSelected
                                        ? 'border-red-600 bg-red-100'
                                        : 'border-gray-300 bg-gray-100'
                                : 'border-gray-300 hover:bg-gray-100'
                            }`}
                        onClick={() => {
                            if (!selected) setSelected(key);
                        }}
                        disabled={!!selected}
                    >
                        <strong>{key}:</strong> {val}
                    </button>
                );
            })}

            {/* Explanation */}
            {selected && (
                <div className="mt-4 p-3 bg-yellow-100 rounded border border-yellow-400 text-sm">
                    <strong>Answer: {answer}</strong>
                    <p className="mt-1">{explanation}</p>
                </div>
            )}
        </div>
    );
};

export default QuizCard;
