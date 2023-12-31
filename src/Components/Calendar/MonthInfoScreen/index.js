import React, { useContext } from "react";
import HeadlineRender from "./HeadlineRender";
import styles from "../styles/calendar.module.scss";
import classNames from "classnames";
import { calendarContext, calendarChangeState } from "../../../context";
import mapDays from "./mapDays";
import getDate from "../helpers/getDate";
import { format } from "date-fns";
import Header from "./Header";

function MonthInfoScreen() {
  const date = useContext(calendarContext);

  const changeDate = useContext(calendarChangeState);

  const clickHandler = ({ target }) => {
    const selectedDay = target.dataset.day;
    const formattedDate = getDate(new Date(date.year, date.month - 1, selectedDay));
    if (target.dataset.day !== date.day) {
      changeDate(formattedDate);
    }
  };

  const monthInfoClasses = classNames(styles.screen, styles.monthScreen);
  const monthString = format(new Date(date.year, date.month - 1, date.day), "MMMM");

  return (
    <div className={monthInfoClasses}>
      <Header year={date.year} month={monthString} />
      <HeadlineRender />

      <div className={styles.cellsLayout}>{date && mapDays(date, clickHandler)}</div>
    </div>
  );
}

export default MonthInfoScreen;
