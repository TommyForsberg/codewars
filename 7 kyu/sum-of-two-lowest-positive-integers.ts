export const sumTwoSmallestNumbers = (numbers: number[]) => {  
   const sum =  numbers.sort((a,b) => a - b).reduce((prevVal, currentValue, currentIndex) => {
       if(currentIndex == 1)
        prevVal += currentValue;
      return prevVal;
   });

  return sum;
  }