import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatPage from "./pages/CatPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <NavBar />
          </div>
        </header>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/cats" element={<CatPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
