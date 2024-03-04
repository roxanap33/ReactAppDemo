import "./App.css";
import HomePage from "./pages/HomePage";
import AdoptionForm from "./pages/AdoptionForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adopt/:animalName" element={<AdoptionForm />} />
      </Routes>
    </Router>
  );
}

export default App;
