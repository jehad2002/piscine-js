function addWeek(date) {
    const weeks = {
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
        6: "Sunday",
        7: "secondMonday",
        8: "secondTuesday",
        9: "secondWednesday",
        10: "secondThursday",
        11: "secondFriday",
        12: "secondSaturday",
        13: "secondSunday"
    };

    let time = date.getTime() + 62135596800000; // Adjusting for historical date difference
    return weeks[Math.floor((time / 86400000) % 14)]; // 14-day week calculation
}

function timeTravel(data) {
    data.date.setHours(data.hour, data.minute, data.second); // Adjust time
    return new Date(data.date);
}

// Example usage:
// console.log(addWeek(new Date('0001-01-01'))); // Output: Monday
// console.log(addWeek(new Date('0001-01-02'))); // Output: Tuesday
// console.log(addWeek(new Date('0001-01-07'))); // Output: Sunday
// console.log(addWeek(new Date('0001-01-08'))); // Output: secondMonday
// console.log(addWeek(new Date('0001-01-09'))); // Output: secondTuesday

// console.log(timeTravel({
//   date: new Date('2020-05-29 23:25:22'),
//   hour: 21,
//   minute: 22,
//   second: 22
// }).toString()); 
// Output: Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)

