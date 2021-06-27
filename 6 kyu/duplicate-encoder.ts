export const duplicateEncode = (s: string): string => {
return s.toLowerCase().split('').map((lookup,i, arr) => 
     arr.filter(s => s === lookup).length === 1 ? '(' : ')'
).join('')
}
