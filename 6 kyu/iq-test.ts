export const iqTest = (numbers: string) => {
    const arr = numbers.split(' ').map(n => parseInt(n));
    let evenMajority = arr.filter((n) => n % 2 == 0).length > 1;
    return evenMajority ? arr.findIndex(n => n % 2 > 0) + 1 : arr.findIndex(n => n % 2 == 0) + 1;
}