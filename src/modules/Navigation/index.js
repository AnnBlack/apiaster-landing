import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import cx from "classnames";

import Logo from "../../assets/images/logo.svg";
import Link from "../../components/Link";

import styles from "./Navigation.module.scss";

const Header = props => {
  return (
    <nav
      className={
        props.background
          ? cx(styles.navigation, styles.background)
          : styles.navigation
      }
    >
      <div className={styles.wrapper}>
        <img src={Logo} alt="logo" />
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <AnchorLink href="#apiaster">Apiaster</AnchorLink>
            <span />
          </li>
          <li className={styles.navItem}>
            <AnchorLink href="#features">Benefits of using</AnchorLink>
            <span />
          </li>
          <li className={styles.navItem}>
            <AnchorLink href="#easyUsage">Easy to use</AnchorLink>
            <span />
          </li>
          <li className={styles.navItem}>
            <AnchorLink href="#miners">Available miners</AnchorLink>
            <span />
          </li>
          <li className={styles.navItem}>
            <AnchorLink href="#social">We are on the Internet</AnchorLink>
            <span />
          </li>
          <li className={cx(styles.navItem, styles.signInLink)}>
            <a href="https://apiaster.org/sign-in">Sign In</a>
          </li>
          <li className={styles.navItem}>
            <Link href="https://apiaster.org/sign-up" title="Sign up" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
