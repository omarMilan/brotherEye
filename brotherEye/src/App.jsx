import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HeroPage from "./heroPage/heroPage";
import HomePage from "./homePage/homePage";
import Header from "./reusableComponents/header";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen fixed top-0 left-0">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/heroPage" element={<HeroPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
