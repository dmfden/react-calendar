import React, { useContext, useEffect, useState } from "react";
import headerStyles from "../styles/calendarHeader.module.scss";
import { calendarContext, calendarChangeState } from "../../../context";
import { addMonths, subMonths } from "date-fns";
import getDate from "../helpers/getDate";
import DataPicker from "./DataPicker";
import classNames from "classnames";
import PropTypes from "prop-types";

function Header({ year, month }) {
  const date = useContext(calendarContext);
  const changeDate = useContext(calendarChangeState);
  const [isDatePicker, setIsDatePicker] = useState(false);

  useEffect(() => {
    setIsDatePicker(false);
  }, [date]);

  const arrowL = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className={headerStyles.arrowIcon}>
      <path
        fillRule="evenodd"
        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
      />
    </svg>
  );

  const arrowR = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className={headerStyles.arrowIcon}>
      <path
        fillRule="evenodd"
        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
      />
    </svg>
  );

  const clickSlideMonthHandler = ({ target }) => {
    const nDate = new Date(date.year, date.month - 1, date.day);
    const isTargetNextMonth = target.dataset.slideMonth === "next";
    const nextMonth = isTargetNextMonth ? addMonths(nDate, 1) : subMonths(nDate, 1);
    const formattedDate = getDate(nextMonth);
    formattedDate.day = 1;
    changeDate(formattedDate);
  };

  const handleTitleClick = () => {
    setIsDatePicker(true);
  };

  const titleStr = (
    <button className={classNames(headerStyles.buttonTitle, "fadeIn")}>
      {month} {year}
    </button>
  );

  return (
    <div className={headerStyles.header}>
      <button className={headerStyles.button} onClick={clickSlideMonthHandler} data-slide-month="prev">
        {arrowL}
      </button>
      <div className={headerStyles.title} onClick={handleTitleClick}>
        {isDatePicker ? <DataPicker /> : titleStr}
      </div>
      <button className={headerStyles.button} onClick={clickSlideMonthHandler} data-slide-month="next">
        {arrowR}
      </button>
    </div>
  );
}

Header.propTypes = {
  year: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
};

export default Header;
