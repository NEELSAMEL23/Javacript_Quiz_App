import React from "react";

const QuizCard = ({ data, selected, setSelected }) => {
    const { question, options, id, answer, explanation } = data;

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto mb-8 text-black transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4">Q{id}. What's the output?</h2>
            <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm mb-4 whitespace-pre-wrap">
                {question}
            </pre>

            {Object.entries(options).map(([key, val]) => {
                const isCorrect = key === answer;
                const isSelected = key === selected;

                return (
                    <button
                        key={key}
                        className={`w-full text-left px-4 py-2 mb-2 rounded-lg border transition-all duration-300
              ${selected
                                ? isCorrect
                                    ? 'border-green-600 bg-green-100'
                                    : isSelected
                                        ? 'border-red-600 bg-red-100'
                                        : 'border-gray-300 bg-gray-100'
                                : 'border-gray-300 hover:bg-gray-100'}
            `}
                        onClick={() => {
                            if (!selected) setSelected(key);
                        }}
                        disabled={!!selected}
                    >
                        <strong>{key}:</strong> {val}
                    </button>
                );
            })}

            {selected && (
                <div className="mt-4 p-3 bg-yellow-100 rounded border border-yellow-400">
                    <strong>Answer: {answer}</strong>
                    <p className="mt-1 text-sm text-black">{explanation}</p>
                </div>
            )}
        </div>
    );
};

export default QuizCard;