function sunnySunday(date) {
    const week = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    // Reference date: 01/01/0001 is a Monday
    const start = new Date("0001-01-01T00:00:00");

    // Calculate the difference in days between the two dates
    const totalDays = Math.floor((date - start) / (1000 * 60 * 60 * 24));

    // Calculate the number of Sundays that would have occurred in this span
    const sundays = Math.floor(totalDays / 7);

    // Adjust total days to account for the skipped Sundays
    const adjustedDays = totalDays - sundays;

    // Return the corresponding weekday in the 6-day week
    return week[adjustedDays % 6];
}
