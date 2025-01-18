import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import HeroPage from "./heroPage/heroPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
