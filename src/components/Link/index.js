import React from "react";
import cx from "classnames";

import styles from "./Link.module.scss";

const Link = ({ className, ...props }) => {
  return (
    <a className={cx(styles.link, className)} href={props.href}>
      {props.title}
    </a>
  );
};

export default Link;
