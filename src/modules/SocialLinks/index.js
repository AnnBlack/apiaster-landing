import React from "react";

import styles from "./SocialLinks.module.scss";
import VK from "../../assets/images/vk.png";
import Instagram from "../../assets/images/inst.png";
import Facebook from "../../assets/images/fb.png";

const SocialLinks = props => {
  return (
    <section className={styles.wrapper} id="social">
      <h4 className={styles.title}>We are on the Internet</h4>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a
            href="https://discord.gg/Q3z4Hb4"
            target="_blanck"
            rel="noopener noreferrer"
          >
            <img src={VK} alt="VK" />
          </a>
        </li>

        <li className={styles.item}>
          <a
            href="https://t.me/apiasterMS"
            target="_blanck"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
        </li>

        <li className={styles.item}>
          <a
            href="https://www.reddit.com/r/Apiaster/"
            target="_blanck"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="Facebook" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SocialLinks;
