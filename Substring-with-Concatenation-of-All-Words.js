function findSubstring(str, wordList) {
    if (!Array.isArray(wordList) || wordList.length === 0) return [];

    const wordLen = wordList[0].length;
    const wordCount = wordList.length;
    const totalLen = wordLen * wordCount;
    const resultIndices = [];

    const freqMap = {};
    for (let word of wordList) {
        freqMap[word] = (freqMap[word] || 0) + 1;
    }

    for (let start = 0; start <= str.length - totalLen; start++) {
        const tempMap = { ...freqMap };
        let matchedWords = 0;

        for (let pos = start; pos < start + totalLen; pos += wordLen) {
            const segment = str.substring(pos, pos + wordLen);

            if (tempMap[segment]) {
                tempMap[segment]--;
                matchedWords++;
                if (tempMap[segment] === 0) delete tempMap[segment];
            } else {
                break;
            }
        }

        if (matchedWords === wordCount) {
            resultIndices.push(start);
        }
    }

    return resultIndices;
}