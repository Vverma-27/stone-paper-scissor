import React from "react";
import Button from "../Button";
import styles from "./index.module.scss";

interface IProps {
  img: string;
  title: string;
  background: string;
  onClick: () => void;
}

const OptionCard = (props: IProps) => {
  return (
    <section
      className={styles.card}
      onClick={props.onClick}
      style={{
        background: `linear-gradient(to right bottom, rgb(${props.background}), rgba(${props.background},0.3))`,
      }}
    >
      <img className={styles.card__image} src={props.img} alt={props.title} />
      <h1 className={styles.card__title}>{props.title}</h1>
    </section>
  );
};

export default OptionCard;
