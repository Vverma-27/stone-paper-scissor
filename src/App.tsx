import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import JoinGame from "./pages/JoinGame";
import SoundComponent from "./components/SoundComponent";
import InformationPage from "./pages/InformationPage";
import GamePage from "./pages/GamePage";
import { useAppDispatch } from "./redux/hooks";
import SocketService from "./services/SocketService";
import { setUsername } from "./redux/user/userSlice";

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const socketService = SocketService;
  const [showUsernameModal, setShowUsernameModal] = useState(false);
  useEffect(() => {
    // navigate("/");
    // if(docu)
    if (!window.localStorage.getItem("username")) setShowUsernameModal(true);
    else {
      SocketService.sendEvent(
        "username-set",
        window.localStorage.getItem("username"),
        null
      );
      dispatch(setUsername(window.localStorage.getItem("username") || ""));
    }
  }, []);
  const onClick = (username: string) => {
    if (!username) return false;
    setShowUsernameModal(false);
    window.localStorage.setItem("username", username);
    dispatch(setUsername(username));
    SocketService.sendEvent("username-set", username, null);
    return true;
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage showUsernameModal={showUsernameModal} onClick={onClick} />
        }
      />
      <Route path="/game" element={<GamePage />} />
      <Route path="/join-game" element={<JoinGame />} />
      <Route
        path="/getting-started"
        element={
          <InformationPage
            showUsernameModal={showUsernameModal}
            onClick={onClick}
          />
        }
      />
    </Routes>
  );
}

function AppWrapper() {
  // useEffect(() => {
  //   const audio = new Audio();
  //   audio.loop = true;
  //   audio.volume = 0.7;
  //   audio.play();
  // }, []);
  return (
    <Router>
      <SoundComponent />
      <App />
    </Router>
  );
}

export default AppWrapper;
