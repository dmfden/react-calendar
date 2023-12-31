import { format } from "date-fns";
function getDayNameString(date) {
  let result = null;
  if (date.day) {
    result = format(new Date(date.year, date.month - 1, date.day), "EEEE");
  }
  return result;
}
export default getDayNameString;
