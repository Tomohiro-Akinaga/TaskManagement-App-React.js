export default function helperTodayDate() {
    const today = new Date();
    const dayIndex = today.getDay();
    const day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wedensday",
        "Thursday",
        "Friday",
        "Saturday",
    ][dayIndex];
    const monthIndex = today.getMonth();
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ][monthIndex];
    const date = today.getDate();
    return { day, month, date};
}
