function pronoun(str) {
    const obj = {};
    const arr = str.split(/\s+/);

    const increment = (key, nextWord) => {
        if (!obj[key]) {
            obj[key] = { count: 0, word: [] };
        }
        obj[key].count++;
        if (nextWord) {
            obj[key].word.push(nextWord);
        }
    };

    for (let i = 0; i < arr.length; i++) {
        const word = arr[i].toLowerCase();
        const nextWord = findNextWord(arr.slice(i + 1));
        if (["i", "you", "he", "she", "it", "they", "we"].includes(word)) {
            increment(word, nextWord);
        }
    }

    for (const key in obj) {
        obj[key].word = obj[key].word.filter(x => x !== undefined);
    }

    return obj;
}

function findNextWord(arr) {
    const pronouns = new Set(["i", "you", "he", "she", "it", "they", "we"]);
    for (const word of arr) {
        if (!pronouns.has(word.toLowerCase())) {
            return word.replace(/,/, "");
        }
    }
    return undefined;
}
