import React from "react";

import styles from "./loading.module.scss";

const Loading = () => (
  <div className={styles.loading}>
    <div className={styles.loading__wrapper}>
      <span />
      <span />
      <span />
      <h2>Loading...</h2>
    </div>
  </div>
);

export default Loading;
