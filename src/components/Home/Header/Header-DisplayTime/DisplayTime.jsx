import helperTodayDate from "./helperTodayDate.js";
import DisplayTimeStyle from "./DisplayTime.module.scss";
const { day, month, date } = helperTodayDate();

export default function DisplayTime() {
    return (
        <p className={DisplayTimeStyle.text}>
            {day}, {month} {date}
        </p>
    );
}
