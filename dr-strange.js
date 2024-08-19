function addWeek(date) {
    const weeks = {
        0: "monday",
        1: "tuesday",
        2: "wednesday",
        3: "thurssday",
        4: "friday",
        5: "saturday",
        6: "sunday",
        7: "secMonday",
        8: "secTuesday",
        9: "secWednesday",
        10: "secThursday",
        11: "secFriday",
        12: "secSaturday",
        13: "secSunday",
    };

    let time = date.getTime() + 62135596800000; //add milliseconds
    return weeks[Math.floor((time / 86400000) % 14)]; //calculation for days
}

function timeTravel(data) {
    data.date.setHours(data.hours, data.minute, data.secound);
    return new Date(data.date);
}
