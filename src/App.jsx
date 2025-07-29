import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartScreen from "./components/StartScreen";
import QuizPage from "./components/QuizPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;