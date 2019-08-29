import React from "react";

import styles from "./GoToApi.module.scss";
import Button from "../../components/Button";

const GoToApi = props => {
  return (
    <section className={styles.background}>
      <div className={styles.wrapper}>
        <h4 className={styles.title}>Go to Apiaster</h4>
        <a href="https://apiaster.org/">
          <Button title="Go" />
        </a>
      </div>
    </section>
  );
};

export default GoToApi;
