import React, { useState } from "react";
import styles from "./styles/calendar.module.scss";
import CurrentDayScreen from "./CurrentDayScreen";
import MonthInfoScreen from "./MonthInfoScreen";
import { calendarContext, calendarChangeState } from "../../context";

import getDate from "./helpers/getDate";

function Calendar() {
  const [date, setDate] = useState(getDate());

  const changeStateDate = (newDate) => {
    setDate({ ...date, ...newDate });
  };

  return (
    <calendarChangeState.Provider value={changeStateDate}>
      <calendarContext.Provider value={date}>
        <div className={styles.calendar}>
          <CurrentDayScreen />
          <MonthInfoScreen />
        </div>
      </calendarContext.Provider>
    </calendarChangeState.Provider>
  );
}

export default Calendar;
