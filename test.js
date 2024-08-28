// function debounce(fn, delay) {
//     let timer = null;
//     return function () {
//         let context = this;
//         let args = arguments;
//         clearTimeout(timer);
//         timer = setTimeout(function () {
//             fn.apply(context, args);
//         }, delay);
//     };
// }

// function opDebounce(fn, delay, options) {
//     var timer = null,
//         first = true,
//         leading;
//     if (typeof options === 'object') {
//         leading = !!options.leading;
//     }
//     return function () {
//         let context = this,
//             args = arguments;
//         if (first && leading) {
//             fn.apply(context, args);
//             first = false;
//         }
//         if (timer) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(function () {
//             fn.apply(context, args);
//         }, delay);
//     };
// }
//============================================

// function throttle(fn, delay) {
//     let last = 0;
//     return function () {
//         const now = +new Date();
//         if (now - last > delay) {
//             fn.apply(this, arguments);
//             last = now;
//         }
//     };
// }

// function opThrottle(fn, delay, { leading = false, trailing = true } = {}) {
//     let last = 0;
//     let timer = null;
//     return function () {
//         const now = +new Date();
//         if (!last && leading === false) {
//             last = now;
//         }
//         if (now - last > delay) {
//             if (timer) {
//                 clearTimeout(timer);
//                 timer = null;
//             }
//             fn.apply(this, arguments);
//             last = now;
//         } else if (!timer && trailing !== false) {
//             timer = setTimeout(() => {
//                 fn.apply(this, arguments);
//                 last = +new Date();
//                 timer = null;
//             }, delay);
//         }
//     };
// }
//===========================================

// function interpolation({
//     step = 0,
//     start = 0,
//     end = 0,
//     callback = () => {},
//     duration = 0,
// } = {}) {
//     const delta = (end - start) / step;
//     let current = start;
//     let i = 0;
//     const timer = setInterval(() => {
//         if (i < step) {
//             callback([current, (duration / step) * (i + 1)]);
//             current += delta;
//             i++;
//         } else {
//             clearInterval(timer);
//         }
//     }, duration / step);
// }
//=============================================================

// async function getJSON(path = '', params = {}) {
//     const url =
//         path +
//         '?' +
//         Object.keys(params)
//             .map((key) => {
//                 return (
//                     key.replace(' ', '+') +
//                     '=' +
//                     params[key].toString().replace(' ', '+')
//                 );
//             })
//             .join('&');
//     const res = await fetch(url).then((response) => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error(response.statusText);
//         }
//     });
//     if (res.error) {
//         throw new Error(res.error);
//     }
//     return res.data;
// }
//==============================================

// async function isWinner(country) {
//     try {
//         country = await db.getWinner(country);
//         if (country === Error('Country Not Found')) {
//             return `${country.name} never was a winner`;
//         }
//         if (country.continent !== 'Europe') {
//             return `${country.name} is not what we are looking for because of the continent`;
//         }
//         let results = await db.getResults(country.id);
//         if (results === Error('Results Not Found')) {
//             return `${country.name} never was a winner`;
//         }
//         if (results.length < 3) {
//             return `${country.name} is not what we are looking for because of the number of times it was champion`;
//         }
//         return (
//             `${country.name} won the FIFA World Cup in ` +
//             results.map((result) => result.year).join(', ') +
//             ' winning by ' +
//             results.map((result) => result.score).join(', ')
//         );
//     } catch (e) {
//         if (e.message === 'Country Not Found') {
//             return `${country} never was a winner`;
//         }
//     }
// }
//====================================================

// async function queryServers(serverName, q) {
//     var url = '/' + serverName + '?q=' + q;
//     var backupUrl = '/' + serverName + '_backup?q=' + q;
//     const req1 = getJSON(url);
//     const req2 = getJSON(backupUrl);
//     const res = await Promise.race([req1, req2]);
//     return res;
// }

// async function gougleSearch(q) {
//     var timeout = new Promise((resolve) =>
//         setTimeout(resolve, 80, Error('timeout'))
//     );
//     var web = queryServers('web', q),
//         image = queryServers('image', q),
//         video = queryServers('video', q);

//     const res = await Promise.race([timeout, Promise.all([web, image, video])]);
//     if (res instanceof Error) {
//         throw res;
//     }
//     return { image: res[1], video: res[2], web: res[0] };
// }
//======================================

// async function all(objs = {}) {
//     var res = {};
//     if (Object.keys(objs).length === 0) return {};
//     for (let key in objs) {
//         res[key] = await objs[key];
//     }
//     return res;
// }
//================================

async function series(arr) {
    var result = [];
    for (const item of arr) {
        result.push(await item());
    }
    return result;
}