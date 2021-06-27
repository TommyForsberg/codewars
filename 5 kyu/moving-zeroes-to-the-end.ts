export const moveZeros = (arr : any[]) => {
return arr.filter(v => v !== 0).concat(arr.filter(v => v === 0))
};