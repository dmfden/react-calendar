import React from "react";
import styles from "../styles/calendar.module.scss";
import classNames from "classnames";

const HeadlineRender = () => {
  const headingClassNames = classNames(styles.cellsLayout, styles.headingCells);
  return (
    <div className={headingClassNames}>
      <div className={styles.cell}>S</div>
      <div className={styles.cell}>M</div>
      <div className={styles.cell}>T</div>
      <div className={styles.cell}>W</div>
      <div className={styles.cell}>T</div>
      <div className={styles.cell}>F</div>
      <div className={styles.cell}>S</div>
    </div>
  );
};

export default HeadlineRender;
