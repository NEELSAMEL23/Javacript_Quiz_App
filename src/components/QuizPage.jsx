import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuizCard from "./QuizCard";

const QuizPage = ({ data }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const questionIndex = parseInt(id) - 1;
  const [selected, setSelected] = useState(null);

  useEffect(() => setSelected(null), [id]);

  if (!data || data.length === 0) {
    return <div className="text-white p-6">No questions match the selected filter.</div>;
  }

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
    <div className="flex flex-col pb-3 min-h-screen  bg-gradient-to-r from-purple-700 to-orange-500 text-white">
      <main className="flex-grow p-6 flex  flex-col justify-center">
        <QuizCard data={currentQuestion} selected={selected} setSelected={setSelected} />
        <div className="mt-8 bg-purple-800 p-4 rounded shadow-inner">
          <div className="max-w-3xl mx-auto flex justify-between items-center">
            <button
              onClick={goPrev}
              disabled={questionIndex === 0}
              className="px-4 py-2 bg-purple-600 text-white rounded disabled:opacity-50"
            >
              Prev
            </button>
            <p className="text-sm">Question {questionIndex + 1} of {data.length}</p>
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
