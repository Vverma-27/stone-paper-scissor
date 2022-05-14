import React, { useEffect } from "react";
import { GameModes, IMove } from "../../redux/gameplay/gameplay.interface";
import styles from "./index.module.scss";

import rockIcon from "../../assets/images/rock-icon-big.png";
import paperIcon from "../../assets/images/paper-icon-big.png";
import scissorsIcon from "../../assets/images/scissors-icon-big.png";
import getSelectionOptionIcon from "../../lib/getSelectionOptionIcon";
import getResult from "../../lib/getResult";
import Button from "../Button";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addInMoveHistory,
  incrementRound,
  reset,
} from "../../redux/gameplay/gameplaySlice";
import { useNavigate } from "react-router-dom";
import SocketService from "../../services/SocketService";
interface IProps {
  userSelection: IMove;
  opponentSelection: IMove;
  // setOpponentSelection: (h: IMove) => void;
}

const Result = (props: IProps) => {
  const { userSelection, opponentSelection } = props;
  const navigate = useNavigate();
  const result = getResult(userSelection, opponentSelection);
  const dispatch = useAppDispatch();
  const { gameOver, hostScore, opponentScore, gameMode, gameInfo } =
    useAppSelector((state) => state.gameplay);
  const isAi = gameMode === GameModes.AI;
  // const navigate
  useEffect(() => {
    dispatch(addInMoveHistory({ result, move: userSelection }));
  }, []);
  return (
    <section
      className="container"
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <img
        src={getSelectionOptionIcon(userSelection)}
        alt="hand icon"
        className={styles.rock__icon}
        style={{ animation: "none" }}
      />
      <section
        className={styles.headings}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 className={`container__heading`}>
          {!gameOver
            ? result
            : `${hostScore > opponentScore ? "You" : "Opponent"} Won The Game`}
        </h1>
        {!gameOver ? (
          <Button
            onClick={() => {
              // dispatch(incrementRound());
              if (gameMode === GameModes.HUMAN_VS_HUMAN) {
                SocketService.sendEvent("next-round", gameInfo?.gameId, null);
              }
            }}
            className={styles.button__text}
          >
            Next Round
          </Button>
        ) : (
          <section
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "3vmin",
              flexWrap: "wrap",
            }}
          >
            {(isAi && (
              <Button
                onClick={() => {
                  dispatch(reset());
                  // nav;
                }}
                className={styles.button__text}
              >
                Restart Game
              </Button>
            )) ||
              null}
            <Button
              onClick={() => {
                navigate("/");
                // nav;
              }}
              className={styles.button__text}
            >
              Go To Home Page
            </Button>
          </section>
        )}
      </section>
      <img
        src={getSelectionOptionIcon(opponentSelection)}
        alt="hand icon"
        className={styles.rock__icon}
        style={{ animation: "none" }}
      />
    </section>
  );
};

export default Result;
