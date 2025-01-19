import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HeroPage from "./heroPage/heroPage";
import HomePage from "./homePage/homePage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/heroPage" element={<HeroPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
