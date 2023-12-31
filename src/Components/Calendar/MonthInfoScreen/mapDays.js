import { getDay, getDaysInMonth, format } from "date-fns";
import styles from "../styles/calendar.module.scss";
import classNames from "classnames";

const mapDays = (dateState, clickHandler) => {
  const nDate = new Date(dateState.year, dateState.month - 1, dateState.day);
  let [currentMonth, currentDay, currentYear] = format(nDate, "M/d/yyyy").split("/");

  const daysInMon = getDaysInMonth(nDate);
  const startDay = getDay(new Date(dateState.year, dateState.month - 1, 1));
  let btnClass = null;
  const res = [];

  for (let i = 0, j = 1; i <= daysInMon + startDay - 1; i++) {
    btnClass = Number(currentDay) === j ? classNames(styles.buttonDay, styles.active) : classNames(styles.buttonDay);

    if (startDay > i) {
      const item = <div className={styles.cell} key={`${i}-${startDay}-${currentDay}-${Math.random() * 100500}`}></div>;
      res.push(item);
    } else {
      const item = (
        <div className={styles.cell} key={`${i}-${startDay}-${currentDay}-${Math.random() * 100500}`}>
          <button className={btnClass} onClick={clickHandler} data-day={j}>
            {j}
          </button>
        </div>
      );
      res.push(item);
      j++;
    }
  }
  return res;
};

export default mapDays;
