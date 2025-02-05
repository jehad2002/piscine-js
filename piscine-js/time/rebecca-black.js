function isFriday(data) {
return new Date(data).getDay() === 5;
}
function isWeekend(data) {
var day = new Date(data).getDay()
return day === 0 || day === 6;
}
function isLeapYear(data) {
    var year = new Date(data).getFullYear()
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
function isLastDayOfMonth(data) {
var d = new Date (data);
return (new Date(d.getFullYear(), d.getMonth() + 1, 0) .getDate() === d.getDate())
}