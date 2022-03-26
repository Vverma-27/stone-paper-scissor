import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import styles from "./index.module.scss";

const InformationPage = () => {
  const navigate = useNavigate();
  return (
    <section className="container">
      <h2 className="container__heading" style={{ marginBottom: "3vmin" }}>
        Game Rules
      </h2>
      <p className={styles.game__rules}>
        The game is played against an AI engine. Before each round you will be
        asked your selection. The AI engine will then select an option on the
        count of three. The options are Rock, Paper and Scissors. The winner is
        decided by the following rules:
        <ul className={styles.game__rules__list}>
          <li>Rock beats Scissors</li>
          <li>Scissors beats Paper</li>
          <li>Paper beats Rock</li>
        </ul>
        If you select the same option as the AI, then it will be a draw. <br />{" "}
        The game ends when one of the players has won 6 rounds or 10 rounds have
        passed.
      </p>
      <Button
        onClick={() => navigate("/game")}
        // onClick={() => ""}
        className={styles.play__button}
      >
        Start The Game
      </Button>
    </section>
  );
};

export default InformationPage;
