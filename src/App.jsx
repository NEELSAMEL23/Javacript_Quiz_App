import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import StartScreen from "./components/StartScreen";
import QuizPage from "./components/QuizPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import data from "./data/quizData.json";

function App() {
  const [difficulty, setDifficulty] = useState("");

  const filteredData = data.filter(q =>
    difficulty ? q.difficulty.toLowerCase() === difficulty.toLowerCase() : true
  );


  return (
    <Router>
      <Navbar
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
      <Routes>
        <Route path="/" element={<StartScreen total={filteredData.length} />} />
        <Route path="/quiz/:id" element={<QuizPage data={filteredData} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
