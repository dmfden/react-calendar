import { format } from "date-fns";

function getDate(argDate = new Date()) {
  const [month, day, year] = format(argDate, "M/d/yyyy").split("/");

  return { month: month, day: day, year: year };
}

export default getDate;
