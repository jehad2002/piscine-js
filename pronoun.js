function pronoun(str) {
    const obj = {};
    const arr = str.split(/\s+/);

    const pronouns = new Set(["i", "you", "he", "she", "it", "they", "we"]);

    for (let i = 0; i < arr.length; i++) {
        const word = arr[i].toLowerCase();
        if (pronouns.has(word)) {
            const nextWord = findNextWord(arr.slice(i + 1), pronouns);
            if (!obj[word]) {
                obj[word] = { count: 0, word: [] };
            }
            obj[word].count++;
            if (nextWord) {
                obj[word].word.push(nextWord);
            }
        }
    }

    return obj;
}

function findNextWord(arr, pronouns) {
    for (const word of arr) {
        const cleanedWord = word.replace(/,/, "");
        if (!pronouns.has(cleanedWord.toLowerCase())) {
            return cleanedWord;
        }
    }
    return undefined;
}
