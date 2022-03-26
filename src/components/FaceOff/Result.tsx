import React from "react";
import { IMove } from "../../redux/gameplay/gameplay.interface";
import styles from "./index.module.scss";

import rockIcon from "../../assets/images/rock-icon-big.png";
import paperIcon from "../../assets/images/paper-icon-big.png";
import scissorsIcon from "../../assets/images/scissors-icon-big.png";
import getSelectionOptionIcon from "../../lib/getSelectionOptionIcon";
import getResult from "../../lib/getResult";
interface IProps {
  userSelection: IMove;
  aiSelection: IMove;
}

const Result = (props: IProps) => {
  const { userSelection, aiSelection } = props;
  const result = getResult(userSelection, aiSelection);
  return (
    <section
      className="container"
      style={{ flexDirection: "row", justifyContent: "space-around" }}
    >
      <img
        src={getSelectionOptionIcon(userSelection)}
        alt="hand icon"
        className={styles.rock__icon}
        style={{ animation: "none" }}
      />
      <section style={{ zIndex: -1 }}>
        <h1 className={`container__heading`}>{result}</h1>
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
