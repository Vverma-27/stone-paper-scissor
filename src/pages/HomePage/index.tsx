import React from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import Typed from "react-typed";
import homeicon from "../../assets/images/home-icon.svg";
import IconComponent from "./IconComponent";
import Button from "../../components/Button";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <section className="container">
      <Typed
        strings={[`WELCOME To`]}
        typeSpeed={60}
        className="container__heading"
      />
      {/*  ROCK PAPER SCISSORS */}
      <Typed
        strings={[`ROCK PAPER SCISSORS`]}
        typeSpeed={30}
        className="container__heading"
      />
      {/* <img src={homeicon} className={styles.icon} /> */}
      <IconComponent className={styles.icon} />
      <Button
        onClick={() => navigate("/getting-started")}
        // onClick={() => ""}
        className={styles.play__button}
      >
        Play Now
      </Button>
      {/* <button
        className={styles.play__button}
        onClick={() => navigate("/getting-started")}
      ></button> */}
    </section>
  );
};

export default HomePage;
