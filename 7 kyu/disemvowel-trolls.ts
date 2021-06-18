export const disemvowel = (str: string) =>{
    return str.replace(/A|O|U|E|I/gi, (matched) => '');
  }