import React from "react";

import styles from "./Main.modules.scss";

const Main = props => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default Main;
