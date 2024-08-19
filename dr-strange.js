// function addWeek(data) {
//     const weeks = {
//         0 : "monday",
//         1 : "tuesday",
//         2 : "wednesday",
//         3 : "thurssday",
//         4 : "friday",
//         5 : "saturday",
//         6 : "sunday",
//         7 : "secMonday",
//         8 : "secTuesday",
//         9 : "secWednesday",
//         10 : "secThursday",
//         11 : "secFriday",
//         12 : "secSaturday",
//         13 : "secSunday",
//     };
//     let time = Date.getTime() + 621355968000000; // melSec  from 1 june 1970  
//     return weeks (time / 864000000 % 14) // melSec in 1 day 
// }
// function timeTravel(data) {
//     return new data(date.date.setHours(date.hours, date.minute, date.secound));
// }
//==============================================================================

function addWeek() {
    const weeks = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
        "SecMonday", "SecTuesday", "SecWednesday", "SecThursday", "SecFriday", "SecSaturday", "SecSunday"
    ];
    let currentTime = new Date().getTime();
    let daysSinceStart = Math.floor((currentTime / 86400000) % 14);
    return weeks[daysSinceStart];
}

function timeTravel(date) {
    let newDate = new Date(date.date);
    newDate.setHours(date.hours, date.minutes, date.seconds);
    return newDate;
}


let dateInput = {
    date: "2024-08-19T00:00:00", 
    hours: 14,
    minutes: 30,
    seconds: 0
};
console.log("Current Day in the Two-Week Cycle:", addWeek());

let newDate = timeTravel(dateInput);
console.log("Updated Date and Time:", newDate.toString());