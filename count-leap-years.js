function countLeapYears(data) {
    let years = 0;
    for(let year = 1; year < Date.getFullYear(); year++) {
        if (year % 4 === 0 && (year % 100 !== 0  || year % 400 === 0 )) {
            years++;
        }
    }
    return years;
}