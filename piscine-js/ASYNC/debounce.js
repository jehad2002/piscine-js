function debounce(fn, delay) {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}

function opDebounce(fn, delay, options) {
    var timer = null,
        first = true,
        leading;
    if (typeof options === 'object') {
        leading = !!options.leading;
    }
    return function () {
        let context = this,
            args = arguments;
        if (first && leading) {
            fn.apply(context, args);
            first = false;
        }
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}
//==============================

// function debounce(fn, wait) {
//     let timeout;
//     return function(...args) {
//         clearTimeout(timeout)
//         timeout = setTimeout(() => fn.apply(this, args), wait);
//     }
// }
// const inputwithoutdebounce = document.getElementById('without-debounc')
// const inputwhitdebounce = document.getElementById('with-debounc')

// inputwithoutdebounce.addEventListener('keyup', handelekeyup);
// inputwhitdebounce.addEventListener('keyup',debounce(handelekeyup, 500));

// let counter = 0;
// function handelekeyup(e) {
// e.target.parent.element.queryselector('result'.innerHtml) +=
// `[s(++countert)] ${e.target.value}<br />`
// }