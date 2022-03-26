import React from "react";
import { useAppSelector } from "../../redux/hooks";
import styles from "./index.module.scss";

const GameStatus = () => {
  const {
    rounds: round,
    playerScore,
    aiScore,
    moveList,
  } = useAppSelector((state) => state.gameplay);
  return (
    <section className={styles.container}>
      <p className={styles.round__info}>
        Round: <br /> {round + 1}
      </p>
      <p className={styles.player__scores}>
        <p className={styles.round__info}>
          Player: <br /> {playerScore}
        </p>
        <div className={styles.score__divider}></div>
        <p className={styles.round__info}>
          AI: <br /> {aiScore}
        </p>
      </p>
      <section className={styles.rounds__dots}>
        {[0, 1, 2, 3, 4].map((e) => {
          return (
            <div
              className={`${styles.result__dot} ${
                styles[`result__dot-${moveList?.[e]?.result}`]
              }`}
            ></div>
          );
        })}
      </section>
    </section>
  );
};

export default GameStatus;
