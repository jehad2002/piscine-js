// function pronoun(str) {
//     var obj = {};
//     var arr = str.split("\n").join(" ").split(" ");
//     for (var i = 0; i < arr.length; i++) {
//         if (/^i$/i.test(arr[i])) {
//             obj["i"] === undefined ? (obj["i"] = {}) : null;
//             obj["i"]["count"] === undefined
//                 ? (obj["i"]["count"] = 1)
//                 : obj["i"]["count"]++;
//             obj["i"]["word"] === undefined ? (obj["i"]["word"] = []) : null;
//             obj["i"]["word"].push(findNextWord(arr.slice(i)));
//         } else if (/^you$/i.test(arr[i])) {
//             obj["you"] === undefined ? (obj["you"] = {}) : null;
//             obj["you"]["count"] === undefined
//                 ? (obj["you"]["count"] = 1)
//                 : obj["you"]["count"]++;
//             obj["you"]["word"] === undefined ? (obj["you"]["word"] = []) : null;
//             obj["you"]["word"].push(findNextWord(arr.slice(i)));
//         } else if (/^he$/i.test(arr[i])) {
//             obj["he"] === undefined ? (obj["he"] = {}) : null;
//             obj["he"]["count"] === undefined
//                 ? (obj["he"]["count"] = 1)
//                 : obj["he"]["count"]++;
//             obj["he"]["word"] === undefined ? (obj["he"]["word"] = []) : null;
//             obj["he"]["word"].push(findNextWord(arr.slice(i)));
//         } else if (/^she$/i.test(arr[i])) {
//             obj["she"] === undefined ? (obj["she"] = {}) : null;
//             obj["she"]["count"] === undefined
//                 ? (obj["she"]["count"] = 1)
//                 : obj["she"]["count"]++;
//             obj["she"]["word"] === undefined ? (obj["she"]["word"] = []) : null;
//             obj["she"]["word"].push(findNextWord(arr.slice(i)));
//         } else if (/^it$/i.test(arr[i])) {
//             obj["it"] === undefined ? (obj["it"] = {}) : null;
//             obj["it"]["count"] === undefined
//                 ? (obj["it"]["count"] = 1)
//                 : obj["it"]["count"]++;
//             obj["it"]["word"] === undefined ? (obj["it"]["word"] = []) : null;
//             obj["it"]["word"].push(findNextWord(arr.slice(i)));
//         } else if (/^they$/i.test(arr[i])) {
//             obj["they"] === undefined ? (obj["they"] = {}) : null;
//             obj["they"]["count"] === undefined
//                 ? (obj["they"]["count"] = 1)
//                 : obj["they"]["count"]++;
//             obj["they"]["word"] === undefined
//                 ? (obj["they"]["word"] = [])
//                 : null;
//             obj["they"]["word"].push(findNextWord(arr.slice(i)));
//         } else if (/^we$/i.test(arr[i])) {
//             obj["we"] === undefined ? (obj["we"] = {}) : null;
//             obj["we"]["count"] === undefined
//                 ? (obj["we"]["count"] = 1)
//                 : obj["we"]["count"]++;
//             obj["we"]["word"] === undefined ? (obj["we"]["word"] = []) : null;
//             obj["we"]["word"].push(findNextWord(arr.slice(i)));
//         }
//     }
//     for (var key in obj) {
//         obj[key]["word"] = obj[key]["word"].filter((x) => x !== undefined);
//     }
//     return obj;
// }

// function findNextWord(arr) {
//     var pronouns = /^(i|you|he|she|it|they|we)$/i;
//     for (var i = 1; i < arr.length; i++) {
//         if (pronouns.test(arr[i])) {
//             return;
//         } else {
//             return arr[i].replace(/,/, "");
//         }
//     }
// }

function pronoun(str) {
    const obj = {};
    const arr = str.split(/\s+/); // Split by any whitespace including new lines
    const pronouns = new Set(["i", "you", "he", "she", "it", "they", "we"]);

    for (let i = 0; i < arr.length; i++) {
        const word = arr[i].toLowerCase().replace(/[.,?!;:()'"]/g, ""); // Clean punctuation

        if (pronouns.has(word)) {
            if (!obj[word]) {
                obj[word] = { count: 0, word: [] };
            }
            obj[word].count++;
            const nextWord = findNextWord(arr.slice(i + 1), pronouns);
            if (nextWord) {
                obj[word].word.push(nextWord);
            }
        }
    }

    return obj;
}

function findNextWord(arr, pronouns) {
    for (const word of arr) {
        const cleanedWord = word.replace(/[.,?!;:()'"]/g, "").trim();
        if (cleanedWord && !pronouns.has(cleanedWord.toLowerCase())) {
            return cleanedWord;
        }
    }
    return undefined;
}