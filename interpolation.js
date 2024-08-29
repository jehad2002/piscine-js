function interpolation({
    step = 0,
    start = 0,
    end = 0,
    CB = () => {},
    duration = 0,
} = {}) {
    if (duration <= 0 || step <= 0) {
        CB([start, 0]);
        return;
    }
    const delta = (end - start) / step;
    let current = start;
    let i = 0;
    const timer = setInterval(() => {
        if (i < step) {
            CB([current, (duration / step) * (i + 1)]);
            current += delta;
            i++;
        } else {
            clearInterval(timer);
        }
    }, duration / step);
}
