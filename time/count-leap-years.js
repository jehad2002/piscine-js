function countLeapYears(date) {
    let years = 0;
    const year = date.getFullYear(); 

    for(let i = 1; i < year; i++) {
        if (i % 4 === 0 && (i % 100 !== 0  || i % 400 === 0 )) {
            years++;
        }
    }
    return years;
}
