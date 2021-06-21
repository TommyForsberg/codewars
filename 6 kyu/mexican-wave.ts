export const wave = (str: string) : string[] =>  {

let result = []
str.split('').forEach((s,i,arr) => {
    let newArr = [...arr];
    
    if(newArr[i] !== ' '){
        newArr[i] = newArr[i].toUpperCase();
        result.push(newArr.join(''));
    }
   
})
return result;
}