function isValid(date) {
    if (new Date(date).toString() === "Invalid Date") {
        return false;
    }
    if (!(date instanceof Date) && typeof date !== "number") {
        return false;
    }
    return true;
}

function isAfter(d1, d2) {
    if (d1 > d2) {
        return true;
    }
    return false;
}

function isBefore(d1, d2) {
    if (d1 < d2) {
        return true;
    }
    return false;
}

function isFuture(date) {
    if (!isValid(date)) {
        return false;
    }
    if (new Date(date).getTime() > Date.now()) {
        return true;
    }
    return false;
}

function isPast(date) {
    if (!isValid(date)) {
        return false;
    }
    if (new Date(date).getTime() < Date.now()) {
        return true;
    }
    return false;
}
// console.log(isValid("2024-08-19")); // true
// console.log(isValid("not-a-date")); // false
// console.log(isValid(new Date())); // true
// console.log(isValid(1692499200000)); // true (timestamp for "2024-08-19")
// console.log(isValid({})); // false

// console.log(isAfter(new Date("2024-08-20"), new Date("2024-08-19"))); // true
// console.log(isAfter(new Date("2024-08-18"), new Date("2024-08-19"))); // false
// console.log(isAfter(1692499200000, 1692585600000)); // false (timestamps comparison)