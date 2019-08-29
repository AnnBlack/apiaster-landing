import React from "react";

import styles from "./Button.module.scss";

const Button = props => {
  return (
    <button className={styles.button} type={props.type} to={props.to}>
      {props.title}
    </button>
  );
};

export default Button;
