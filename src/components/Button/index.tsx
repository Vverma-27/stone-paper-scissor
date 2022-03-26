import React from "react";
import styles from "./index.module.scss";

interface IProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, children, className }: IProps) => {
  return (
    <button className={`${styles.container} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
