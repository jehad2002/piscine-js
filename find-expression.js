function findExpression(num) {
    for (let i = 0; i < 1000000; i++) {
        let copy = 1;
        let s = "1";
        while (copy <= num) {
            if (copy === num) {
                return s;
            }
            if (Math.random < 0.5) {
                copy += 4
                s += " +4"
            } else {
                copy *= 2
                s += " +2"
            }
        }
    }
    return undefined;
}
//1 *2 *2 +4.