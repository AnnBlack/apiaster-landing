import React from "react";

import styles from "./Reasons.module.scss";
import Rectangle from "../../assets/images/rectangle.svg";

const Item = props => {
  return (
    <li className={styles.item}>
      <img
        src={Rectangle}
        alt="Rectangle"
        width="100"
        height="100"
        className={styles.image}
      />
      <p>{props.title}</p>
    </li>
  );
};

const Reasons = props => {
  return (
    <section className={styles.wrapper}>
      <h4 className={styles.title}>Why Apiaster</h4>
      <ul className={styles.list}>
        <Item title="Stable and simple, yet functional mining OS" />
        <Item title="Extremely low fees wile mining with either nanominer or Nanopool" />
        <Item title="Low and fair fees - pay for a GPU, insted of all Rig" />
        <Item title="Absolutely free if using both nanominer and Nanopool" />
      </ul>
    </section>
  );
};

export default Reasons;
