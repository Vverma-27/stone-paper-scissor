import React from "react";
import styles from "./index.module.scss";
import rockIcon from "../../assets/images/rock-icon-big.png";

const FaceOff = () => {
  return (
    <section
      className="container"
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <img src={rockIcon} alt="hand icon" className={styles.rock__icon} />
      <section className={styles.headings}>
        <h1 className={`container__heading ${styles.waiting}`}>
          Waiting For Opponent Selection ...
        </h1>
      </section>
      <img src={rockIcon} alt="hand icon" className={styles.rock__icon} />
    </section>
  );
};

export default FaceOff;
