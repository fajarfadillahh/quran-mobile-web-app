import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Surah from "./pages/Surah";
import Husna from "./pages/Husna";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/surah/:id" element={<Surah />} />
        <Route path="/asmaul-husna" element={<Husna />} />
      </Routes>
    </Router>
  );
};

export default App;
