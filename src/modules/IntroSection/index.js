import React from "react";
import Ball from "../../assets/images/ball.svg";
import styles from "./IntroSection.module.scss";
import Button from "../../components/Button";

const IntroSection = props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titles}>
        <h1 className={styles.title}>
          Easy mining – <br />
          stable profit
        </h1>
        <p className={styles.text}>
          We did not come first, but we'll be last on your farm
        </p>
        <a href="https://apiaster.org/">
          <Button title="Get" />
        </a>
      </div>
      <div className={styles.image}>
        <img src={Ball} alt="ball" />
      </div>
    </div>
  );
};

export default IntroSection;
