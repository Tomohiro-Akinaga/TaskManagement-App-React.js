import helperTodayDate from "./helperTodayDate.js";

const {day, month, date} = helperTodayDate();
console.log(day, month, date);

export default function DisplayTime() {
    return <p>{day}, {month}{date}</p>;
}
