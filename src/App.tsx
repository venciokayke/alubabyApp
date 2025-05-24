import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Onboarding from "./components/Onboarding"; //importa o componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/onboarding" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
