import React, { useContext, useState } from "react";
import headerStyles from "../styles/calendarHeader.module.scss";
import { calendarContext, calendarChangeState } from "../../../context";
import getDate from "../helpers/getDate";
import classNames from "classnames";

function DataPicker() {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const date = useContext(calendarContext);
  const changeDate = useContext(calendarChangeState);

  const handleDataPick = (event) => {
    event.preventDefault();
    const newDate = event.target.datepick.valueAsDate;

    if (newDate) {
      const formattedDate = getDate(newDate);
      if (date.day === formattedDate.day && date.month === formattedDate.month && date.year === formattedDate.year) {
        return;
      }
      changeDate(formattedDate);
    }
  };

  const handleDatePickChange = ({ target }) => {
    const newDate = target.valueAsDate;

    if (newDate) {
      const formattedDate = getDate(newDate);
      if (date.day === formattedDate.day && date.month === formattedDate.month && date.year === formattedDate.year) {
        setIsSubmitDisabled(true);
        return;
      } else {
        setIsSubmitDisabled(false);
      }
    }
  };

  const defaultPickerValue = `${date.year}-${date.month.length < 2 ? "0" + date.month : date.month}-${date.day.length < 2 ? "0" + date.day : date.day}`;

  return (
    <form onSubmit={handleDataPick} className={classNames(headerStyles.datePickerForm, "fadeIn")}>
      <input type="date" id="datepick" name="datepick" className={headerStyles.datePicker} defaultValue={defaultPickerValue} onChange={handleDatePickChange} />
      <button type="submit" className={headerStyles.buttonSet} disabled={isSubmitDisabled}>
        Set
      </button>
    </form>
  );
}

export default DataPicker;
