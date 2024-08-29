function interpolation({
    step = 0,
    start = 0,
    end = 0,
    CB = () => {},
    duration = 0,
} = {}) {
    if (step <= 0 || duration <= 0) {
        CB([start, 0]);
        return;
    }

    const delta = (end - start) / step;
    let current = start;
    let i = 0;
    let accumulatedDuration = 0;

    const timer = setInterval(() => {
        if (i < step) {
            accumulatedDuration += duration / step;
            current += delta;
            i++;
        } else {
            clearInterval(timer);
            CB([current, accumulatedDuration]);
        }
    }, duration / step);
}
