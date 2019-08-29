import React, { useState } from "react";
import cx from "classnames";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./Features.module.scss";
import Arrow from "../../assets/images/arrow.svg";
import Resize from "../../assets/images/resize.svg";

import FirstScreenLarge from "../../assets/images/firstScreenLarge.png";
import SecondScreenLarge from "../../assets/images/secondScreenLarge.png";
import ThirdScreenLarge from "../../assets/images/thirdScreenLarge.png";
import FourthScreenLarge from "../../assets/images/fourthScreenLarge.png";
import FifthScreenLarge from "../../assets/images/fifthScreenLarge.png";

const ItemRight = ({
  image,
  title,
  text,
  isOpen,
  toggleOpen,
  ...otherProps
}) => {
  const [resized, setResized] = useState(isOpen);
  const toggle = () => setResized(resized => !resized);

  return (
    <li className={cx(styles.item, styles.item__right)}>
      <ScrollAnimation animateIn="fadeInLeft">
        <div
          className={cx(
            styles.image__wrapper,
            resized ? styles.resizedImage : null
          )}
        >
          <img
            src={image}
            alt={title}
            className={styles.image}
            onClick={() => {
              toggleOpen();
              toggle();
            }}
          />

          <span
            className={styles.resize}
            onClick={() => {
              toggleOpen();
              toggle();
            }}
          >
            <img src={Resize} alt="Resize" />
          </span>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInRight">
        <div className={cx(styles.about, styles.about__right)}>
          <p className={styles.about__title}>{title}</p>
          <p className={styles.about__text}>{text}</p>
        </div>
      </ScrollAnimation>
    </li>
  );
};

const ItemLeft = ({
  title,
  text,
  image,
  isOpen,
  toggleOpen,
  ...otherProps
}) => {
  const [resized, setResized] = useState(isOpen);
  const toggle = () => setResized(resized => !resized);
  return (
    <li className={cx(styles.item, styles.item__left)}>
      <ScrollAnimation animateIn="fadeInLeft">
        <div className={cx(styles.about, styles.about__left)}>
          <p className={styles.about__title}>{title}</p>
          <p className={styles.about__text}>{text}</p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight">
        <div
          className={cx(
            styles.image__wrapper,
            resized ? styles.resizedImage : null
          )}
        >
          <img
            src={image}
            alt={title}
            className={styles.image}
            onClick={() => {
              toggleOpen();
              toggle();
            }}
          />
          <span
            className={styles.resize}
            onClick={() => {
              toggleOpen();
              toggle();
            }}
          >
            <img src={Resize} alt="Resize" />
          </span>
        </div>
      </ScrollAnimation>
    </li>
  );
};

const Features = props => {
  const [resizedImage, setResizedImage] = useState("");

  return (
    <section className={styles.wrapper} id="features">
      <ScrollAnimation animateIn="fadeIn">
        <div className={styles.features__wrapper}>
          <h2 className={styles.title}>Handy and efficient</h2>
          <p className={styles.text}>
            Apiaster is a simple and robust, yet functional mining OS that does
            the job. Apiaster OS aims to make monitoring and managing your rigs
            just as easy as can be. It supports most used AMD and Nvidia GPUs,
            it can be utilized on any PC and keeps you updated, always, on the
            go.
          </p>
          <img src={Arrow} alt="arrow" className={styles.arrow} />
        </div>
      </ScrollAnimation>

      <ul className={styles.list}>
        <ItemRight
          image={FirstScreenLarge}
          title="Easy set up"
          text="It is now effortless and does not require any special knowledge.
                Choose among most profitable and popular pools, miners and coins
                with just a few clicks."
          toggleOpen={() => setResizedImage("first")}
          isOpen={resizedImage === "first"}
        />

        <ItemLeft
          title="Diversified"
          text="Various of most popular miners that cover all profitable
                algorithms already preinstalled, new ones are being tested and
                will be added based on demand. No need to configure mining pools
                as better part of them have been already added - just choose the
                one you need."
          image={SecondScreenLarge}
          toggleOpen={() => setResizedImage("second")}
          isOpen={resizedImage === "second"}
        />

        <ItemRight
          image={ThirdScreenLarge}
          title="Flexible"
          text="Add as many wallet addresses for different coins as you want,
          use them in combination with different miners/pools, save it as
          presets and apply later for Rigs individually or the whole farm."
          toggleOpen={() => setResizedImage("third")}
          isOpen={resizedImage === "third"}
        />

        <ItemLeft
          title="Scalable"
          text="Wide variety of useful tools will make managing big farms just
          convenient; use tags when look up for your rigs, sort rigs by
          parameters and apply overclock presets for selected GPUs just in
          a click."
          image={FourthScreenLarge}
          toggleOpen={() => setResizedImage("fourth")}
          isOpen={resizedImage === "fourth"}
        />

        <ItemRight
          image={FifthScreenLarge}
          title="Secure and more"
          text="Access levels for owners and administrators, distinct and neat
          statistics, instant notifications via email and Telegram.
          Detailed reports; power consumption, hashrates, temperature and
          built-in GPUs error detection are all on one single dashboard."
          toggleOpen={() => setResizedImage("fifth")}
          isOpen={resizedImage === "fifth"}
        />
      </ul>
    </section>
  );
};

export default Features;
