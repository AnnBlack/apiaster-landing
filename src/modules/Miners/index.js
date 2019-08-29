import React from "react";

import styles from "./Miners.module.scss";

const Miners = props => {
  return (
    <section className={styles.wrapper} id="miners">
      <h4 className={styles.title}>Available miners</h4>
      <div className={styles.links}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span>nanominer:</span>
            Ethash, CryptoNights, Cuckaroo, etc.
          </li>
          <li className={styles.item}>
            <span>Claymore:</span>
            Ethash
          </li>
          <li className={styles.item}>
            <span>T-Rex:</span>
            x16r, MTP, Tribus, Skunk, etc.
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span>CryptoDredge:</span>
            CryptoNights, MTP, Lyras, etc.
          </li>
          <li className={styles.item}>
            <span>TeamRedMiner:</span> CryptoNights, Lyras, etc.
          </li>
          <li className={styles.item}>
            <span>BMiner:</span> Ethashes, Equihash, Cuckaroo, etc.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Miners;
