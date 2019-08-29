import React from "react";

import Main from "../Main";

import styles from "./Layout.module.scss";

const Layout = props => {
  return (
    <div className={styles.wrapper}>
      <Main />
      {props.children}
    </div>
  );
};

export default Layout;
