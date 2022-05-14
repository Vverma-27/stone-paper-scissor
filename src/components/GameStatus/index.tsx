import React from "react";
import { GameModes } from "../../redux/gameplay/gameplay.interface";
import { useAppSelector } from "../../redux/hooks";
import styles from "./index.module.scss";

const GameStatus = () => {
  const {
    rounds: round,
    hostScore,
    opponentScore,
    moveList,
    gameInfo,
    gameMode,
  } = useAppSelector((state) => state.gameplay);
  const { username } = useAppSelector((state) => state.user);
  const hostIsPlayer = gameInfo?.host === username;
  const isAi = gameMode === GameModes.AI;
  const opponentUsername = !hostIsPlayer ? gameInfo?.host : gameInfo?.opponent;
  return (
    <section className={styles.container}>
      <p className={styles.round__info}>
        Round: <br /> {round + 1}
      </p>
      <p className={styles.player__scores}>
        <p className={styles.round__info}>
          {isAi ? "Player" : username}: <br />{" "}
          {hostIsPlayer ? hostScore : opponentScore}
        </p>
        <div className={styles.score__divider}></div>
        <p className={styles.round__info}>
          {isAi ? "AI" : opponentUsername}: <br />
          {!hostIsPlayer ? hostScore : opponentScore}
        </p>
      </p>
      <section
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "1vh",
        }}
      >
        {Array.from(Array(2)).map((el, i) => {
          return (
            <section className={styles.rounds__dots}>
              {Array.from(Array(5)).map((el, e) => (
                <div
                  className={`${styles.result__dot} ${
                    styles[`result__dot-${moveList?.[i * 5 + e]?.result}`]
                  }`}
                ></div>
              ))}
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default GameStatus;
