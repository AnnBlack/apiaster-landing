import React from "react";
import cx from "classnames";

import styles from "./About.module.scss";
import AboutImg from "../../assets/images/about.jpg";

const About = props => {
  return (
    <section className={styles.wrapper} id="about">
      <img
        src={AboutImg}
        alt="about"
        width="905"
        height="465"
        className={styles.image}
      />
      <div className={styles.tips}>
        <p className={styles.tip}>
          Details about the state of the rig and the mining process is always on
          the screen along with other rig parameters
          <span
            className={cx(styles.circle, styles.yellow, styles.circle__first)}
          />
        </p>

        <p className={styles.tip}>
          Detailed charts with current and archived hashrate and other
          parameters are available
          <span
            className={cx(styles.circle, styles.blue, styles.circle__second)}
          />
        </p>

        <p className={styles.tip}>
          Clear navigation and user-friendly interface make farm management
          simple, and mining efficient
          <span
            className={cx(styles.circle, styles.red, styles.circle__third)}
          />
        </p>

        <p className={styles.tip}>
          Command buttons for the operational management of both one rig and the
          list of selected rigs are available
          <span
            className={cx(styles.circle, styles.blue, styles.circle__fourth)}
          />
        </p>

        <p className={styles.tip}>
          Detailed information on the current state of installed GPUs and
          applied overclocking parameters are presented for every rig
          <span
            className={cx(styles.circle, styles.yellow, styles.circle__fifth)}
          />
        </p>
      </div>
    </section>
  );
};

export default About;
