import React from "react";
import styles from "./Button.module.css";

// reusable button component, which can be set with props
const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
