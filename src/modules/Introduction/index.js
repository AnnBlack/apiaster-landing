import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "./Introduction.module.scss";
import Button from "../../components/Button";

const Introduction = props => {
  return (
    <section className={styles.wrapper} id="apiaster">
      <h2 className={styles.title}>Apiaster</h2>
      <p className={styles.text}>
        Apiaster is a simple, yet functional, scalable mining OS designed for a
        faster and more efficient GPU mining; whether one Rig or a huge farm, it
        will bring the efficiency (stability) at a new (higher) level. Easy
        management, flexible settings and stable functioning are all you need to
        improve mining rewards.
      </p>
      <p className={styles.text}>
        Our ecosystem with nanopool and nanominer cuts down both fees and
        expenses. Wide and continuously growing set of extra functionality for
        monitoring and management that our top notch dev team is continuously
        making even wider. The result of our teamwork is the reason of your
        success.
      </p>
      <AnchorLink href="#about">
        <Button title="Show more" />
      </AnchorLink>
    </section>
  );
};

export default Introduction;
