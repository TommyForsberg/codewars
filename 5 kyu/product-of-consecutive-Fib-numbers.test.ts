import {productFib} from './product-of-consecutive-Fib-numbers';
test.only('should find product', () => {
    [
     [714, [21, 34, true]],
     [800, [34, 55, false]],
     [4895, [55, 89, true]],
    
 ]
     .forEach(([n, result]) => {
         expect(productFib(n as number)).toEqual(result);  
 
     })
       
   });