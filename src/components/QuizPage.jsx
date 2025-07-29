// src/components/QuizPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/quizData.json";
import QuizCard from "./QuizCard";

const QuizPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const questionIndex = parseInt(id) - 1;

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(null);
  }, [id]);

  if (questionIndex < 0 || questionIndex >= data.length) {
    return <div className="text-white p-6">Question not found!</div>;
  }

  const currentQuestion = data[questionIndex];

  const goNext = () => {
    if (questionIndex + 1 < data.length) {
      navigate(`/quiz/${questionIndex + 2}`);
    }
  };

  const goPrev = () => {
    if (questionIndex > 0) {
      navigate(`/quiz/${questionIndex}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-700 to-orange-500 text-white">
      <main className="flex-grow p-6">
        <QuizCard
          data={currentQuestion}
          selected={selected}
          setSelected={setSelected}
        />

        {/* Pagination in normal flow */}
        <div className="mt-8 bg-purple-800 p-4 rounded shadow-inner">
          <div className="max-w-3xl mx-auto flex justify-between items-center">
            <button
              onClick={goPrev}
              disabled={questionIndex === 0}
              className="px-4 py-2 bg-purple-600 text-white rounded disabled:opacity-50"
            >
              Prev
            </button>
            <p className="text-sm">
              Question {questionIndex + 1} of {data.length}
            </p>
            <button
              onClick={goNext}
              disabled={questionIndex + 1 === data.length}
              className="px-4 py-2 bg-purple-600 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizPage;
