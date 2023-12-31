import React, { useContext, useEffect, useRef } from "react";
import styles from "../styles/calendar.module.scss";
import classNames from "classnames";
import { calendarContext } from "../../../context";
import getDayNameString from "../helpers/getDayNameString";

function CurrentDayScreen() {
  const date = useContext(calendarContext);
  const dayBlock = useRef(null);

  useEffect(() => {
    let dayTextBlock = null;
    const animateTimeout = setTimeout(() => {
      dayTextBlock = dayBlock.current;
      dayTextBlock.classList.add("flipInX");
    }, 0);

    return () => {
      dayTextBlock.classList.remove("flipInX");
      clearTimeout(animateTimeout);
    };
  }, [date]);

  let dayName = getDayNameString(date);
  const screenCurrentDayClasses = classNames(styles.screen, styles.currentDay);
  const dateText = date.day ? (
    <p className={styles.dayText} ref={dayBlock}>
      {date?.day}
    </p>
  ) : null;

  return (
    <div className={screenCurrentDayClasses}>
      <p className={styles.title}>{dayName && dayName}</p>
      {dateText}
    </div>
  );
}

export default CurrentDayScreen;
