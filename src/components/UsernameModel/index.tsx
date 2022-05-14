import React, { useRef, useState } from "react";
import styles from "./index.module.scss";

const UsernameModal = ({
  onClick,
}: {
  onClick: (username: string) => boolean;
}) => {
  const [correct, setCorrect] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <section className={styles.modal}>
      <section className={styles.modal__body}>
        <h1 className={styles.modal__title}>Your Username</h1>
        {(!correct && (
          <p className={styles.modal__error}>Username Cannot Be Empty</p>
        )) ||
          null}
        <input
          className={styles.modal__input}
          type="text"
          ref={inputRef}
          placeholder="Please Enter Your Username"
        />
        <button
          className={styles.modal__button}
          onClick={() => setCorrect(onClick(inputRef?.current?.value || ""))}
        >
          Submit
        </button>
      </section>
    </section>
  );
};

export default UsernameModal;
