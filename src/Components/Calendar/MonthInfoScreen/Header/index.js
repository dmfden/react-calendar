import React, { useContext, useEffect, useState } from "react";
import headerStyles from "../../styles/calendarHeader.module.scss";
import { calendarContext, calendarChangeState } from "../../../../context";
import { addMonths, subMonths } from "date-fns";
import getDate from "../../helpers/getDate";
import classNames from "classnames";
import PropTypes from "prop-types";
import { arrowL, arrowR } from "../../assets/icons";
import DataPicker from "../DataPicker";

function Header({ year, month }) {
  const date = useContext(calendarContext);
  const changeDate = useContext(calendarChangeState);
  const [isDatePicker, setIsDatePicker] = useState(false);

  useEffect(() => {
    setIsDatePicker(false);
  }, [date]);

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

  const headerTitleBlock = (
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
        {isDatePicker ? <DataPicker /> : headerTitleBlock}
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
