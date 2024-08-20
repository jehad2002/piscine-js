function sunnySunday(date) {
    const week = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    // Reference date
    let start = new Date("0001-01-01T00:00:00");
    
    // Calculate the total number of days between the two dates
    const totalDays = Math.floor((date - start) / (1000 * 60 * 60 * 24));

    // Calculate how many Sundays would have been in the total days (if there were no skipped Sundays)
    const sundays = Math.floor(totalDays / 7);

    // Adjust the total days to exclude Sundays
    const adjustedDays = totalDays - sundays;

    // Determine the weekday in the 6-day week
    return week[adjustedDays % 6];
}
