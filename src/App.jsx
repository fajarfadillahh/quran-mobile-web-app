import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Surah from "./pages/Surah";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/surah/:id" element={<Surah />} />
      </Routes>
    </Router>
  );
};

export default App;
