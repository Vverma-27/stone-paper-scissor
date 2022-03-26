import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SoundComponent from "./components/SoundComponent";
import InformationPage from "./pages/InformationPage";
import GamePage from "./pages/GamePage";

function App() {
  // useEffect(() => {
  //   const audio = new Audio();
  //   audio.loop = true;
  //   audio.volume = 0.7;
  //   audio.play();
  // }, []);
  return (
    <Router>
      <SoundComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/getting-started" element={<InformationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
