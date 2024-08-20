function sunnySunday(date) {
    const week = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    // Start from the reference date
    let start = new Date("0001-01-01T00:00:00");
    let totalDays = 0;

    // Calculate total number of days
    while (start < date) {
        start.setDate(start.getDate() + 1);
        totalDays++;
    }

    // Exclude Sundays from the count
    const adjustedDays = totalDays - Math.floor(totalDays / 7);

    // Find the corresponding weekday
    return week[adjustedDays % 6];
}
