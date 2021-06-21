export const accum = (str:string) => {
    return str.split('').map((s,index)=> 
      s.toUpperCase() + s.toLowerCase().repeat(index)
    ).join('-');
}