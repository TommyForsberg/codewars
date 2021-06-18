/* A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base.*/

export const isNarcissistic = (n: number): boolean => {
   
   let value = n.toString()
      .split('')
      .map((s) => parseInt(s))
      .reduce((total, currVal, index, arr) => {
         const power = arr.length;
         total += Math.pow(currVal, power);
         return total;
      }, 0)
   return value === n;
}