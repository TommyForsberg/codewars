
/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. */
export const isIsogram = (str: string)=>{  
    const s = new Set(str.toLowerCase());
    return s.size === str.length;
}