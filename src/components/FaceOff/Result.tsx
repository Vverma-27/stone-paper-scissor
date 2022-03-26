import React, { useEffect } from "react";
import { IMove } from "../../redux/gameplay/gameplay.interface";
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
interface IProps {
  userSelection: IMove;
  aiSelection: IMove;
}

const Result = (props: IProps) => {
  const { userSelection, aiSelection } = props;
  const result = getResult(userSelection, aiSelection);
  const dispatch = useAppDispatch();
  const { gameOver } = useAppSelector((state) => state.gameplay);
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
        <h1 className={`container__heading`}>{result}</h1>
        {!gameOver ? (
          <Button
            onClick={() => {
              dispatch(incrementRound());
            }}
            className={styles.button__text}
          >
            Next Round
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch(reset());
              // nav;
            }}
            className={styles.button__text}
          >
            Restart Game
          </Button>
        )}
      </section>
      <img
        src={getSelectionOptionIcon(aiSelection)}
        alt="hand icon"
        className={styles.rock__icon}
        style={{ animation: "none" }}
      />
    </section>
  );
};

export default Result;
