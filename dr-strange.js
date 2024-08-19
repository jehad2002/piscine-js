function addWeek(data) {
    const weeks = {
        0 : "monday",
        1 : "tuesday",
        2 : "wednesday",
        3 : "thurssday",
        4 : "friday",
        5 : "saturday",
        6 : "sunday",
        7 : "secMonday",
        8 : "secTuesday",
        9 : "secWednesday",
        10 : "secThursday",
        11 : "secFriday",
        12 : "secSaturday",
        13 : "secSunday",
    };
    let time = Date.getTime() + 621355968000000; // melSec  from 1/1/1970  
    return weeks (time / 864000000 % 14) // melSec in 1 day 
}
function timeTravel(data) {
    return new data(date.date.setHours(date.hours, date.minute, date.secound));
}