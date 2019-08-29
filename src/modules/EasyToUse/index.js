import React from "react";

import styles from "./EasyToUse.module.scss";

const EasyToUse = props => {
  return (
    <section className={styles.background} id="easyUsage">
      <div className={styles.wrapper}>
        <h4 className={styles.title}>Easy to use</h4>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span>Step 1:</span>
            <p>
              DOWNLOAD <br />
              the Apiaster{" "}
            </p>
          </li>

          <li className={styles.item}>
            <span>Step 2:</span>
            <p>Register and CONNECT your rigs </p>
          </li>

          <li className={styles.item}>
            <span>Step 3:</span>
            <p>
              START raising <br />
              your profits{" "}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default EasyToUse;
