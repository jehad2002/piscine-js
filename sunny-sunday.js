function sunnySunday(date) {
    // Get the total number of days since 01/01/0001
    const startDate = new Date(1, 0, 1); // 01/01/0001
    const daysDifference = Math.floor((date - startDate) / (1000 * 60 * 60 * 24));
    
    // Calculate the effective day in the 6-day week (Monday to Saturday)
    const adjustedDayIndex = daysDifference % 6;
    
    // Array of weekdays, excluding Sunday
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    return weekdays[adjustedDayIndex];
}

// Example usage:
// const testDate = new Date(2024, 7, 20); // August 20, 2024
// console.log(sunnySunday(testDate)); // Output: corresponding day of the 6-day week
