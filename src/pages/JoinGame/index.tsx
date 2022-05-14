import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import subscribeToGameStart from "../../lib/subscribeToGameStart";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import SocketService from "../../services/SocketService";

const JoinGame = () => {
  var url = new URL(window.location.href);
  const gameId = url.searchParams.get("game-id");
  // const { username } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  console.log("hello");
  useEffect(() => {
    console.log("hello");
    SocketService.sendEvent(
      "username-set",
      window.localStorage.getItem("username"),
      null
    );
    SocketService.sendEvent("join-game", gameId, (res: any) => {
      if (!res) navigate("/");
    });
    subscribeToGameStart(dispatch, navigate);
  }, []);
  return null;
};

export default JoinGame;
