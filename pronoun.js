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

    const pronouns = new Set(["i", "you", "he", "she", "it", "they", "we"]);

    for (let i = 0; i < arr.length; i++) {
        const word = arr[i].toLowerCase();
        if (pronouns.has(word)) {
            const nextWord = findNextWord(arr.slice(i + 1));
            increment(word, nextWord);
        }
    }

    return obj;
}

function findNextWord(arr) {
    const pronouns = new Set(["i", "you", "he", "she", "it", "they", "we"]);
    for (const word of arr) {
        const cleanedWord = word.replace(/,/, "");
        if (!pronouns.has(cleanedWord.toLowerCase())) {
            return cleanedWord;
        }
    }
    return undefined;
}
