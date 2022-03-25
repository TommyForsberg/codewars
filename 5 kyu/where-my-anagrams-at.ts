export const anagrams = (word: string ,words : string[]) => {
    return  words.filter(w => {
        return isAnagram(word,w) ? w : undefined
    });

    };
    const isAnagram = (baseWord:string, compareWord:string) : boolean => {
        return baseWord.split('').sort().join('') === compareWord.split('').sort().join('');
    }