import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import FaceOff from "../../components/FaceOff";
import GameStatus from "../../components/GameStatus";
import SelectOption from "../../components/SelectOption";
import { GameModes, IMove } from "../../redux/gameplay/gameplay.interface";
import { incrementRound } from "../../redux/gameplay/gameplaySlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import SocketService from "../../services/SocketService";

const Game = () => {
  const [selectedOption, setSelectedOption] = useState<IMove>(0);
  const [opponentSelection, setOpponentSelection] = useState<IMove>(0);
  // const [result, setResult] = useState<string>("");
  const {
    rounds: round,
    gameMode,
    gameOver,
    gameInfo,
  } = useAppSelector((state) => state.gameplay);
  const { username } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const timerId = useRef<NodeJS.Timeout>(null);
  const isHost = gameInfo?.host === username;
  useEffect(() => {
    if (!gameMode && gameMode !== 0) navigate("/");
    // eslint-disable-next-line
    return () => {
      clearTimeout(timerId.current);
    };
  }, []);
  useEffect(() => {
    setSelectedOption(0);
    setOpponentSelection(0);
    // setResult("");
  }, [round]);
  useEffect(() => {
    if (gameMode === GameModes.HUMAN_VS_HUMAN) {
      SocketService.subscribeTo("game-left", () => {
        setTimeout(() => alert("Opponent Has Left The Match"), 2000);
        navigate("/");
      });
      SocketService.subscribeTo(
        "moves-selected",
        (payload: { hostMove: IMove; opponentMove: IMove }) => {
          setOpponentSelection(
            !isHost ? payload.hostMove : payload.opponentMove
          );
          // setResult(result);
        }
      );
      SocketService.subscribeTo("next-round", () => {
        if (!gameOver) {
          clearTimeout(timerId.current);
          timerId.current = setTimeout(() => dispatch(incrementRound()), 1000);
        }
      });
    }
  }, []);
  return (
    <section className="container" style={{ marginTop: "10vmin" }}>
      <GameStatus />
      {!selectedOption ? (
        <SelectOption
          onClick={(e: IMove) => {
            setSelectedOption(e);
            if (gameMode === GameModes.HUMAN_VS_HUMAN)
              SocketService.sendEvent("move-selected", e, null);
          }}
        />
      ) : (
        <FaceOff
          selection={selectedOption}
          opponentSelection={opponentSelection}
          setOpponentSelection={setOpponentSelection}
          // result={result}
        />
      )}
    </section>
  );
};

export default Game;
