function sunnySunday(date) {
    const week = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let start = new Date("0001-01-01T00:00:00");
    let counter = 0;

    while (start < date) {
        start.setDate(start.getDate() + 1);
        counter++;
        if (counter % 7 === 6) {
            // Skip Sundays by not incrementing the counter on Sundays
            start.setDate(start.getDate() + 1);
        }
    }

    return week[counter % 6];
}
