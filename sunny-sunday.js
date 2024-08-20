function sunnySunday(date) {
    let counter = 0;
    const week = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    let start = new Date("0001-01-01T00:00:00");
    while (start < date) {
        start.setDate(start.getDate() + 1);
        counter++;
    }
    return week[counter % 7];
}
