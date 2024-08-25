// function factorial(num) {
//   if (num <= 1) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// }

// console.log(factorial(5));

// function power(num, itr) {
//   if (itr <= 0) return 1;
//   if (itr === 1) return num;
//   return num * power(num, itr - 1);
// }
// console.log(power(2, 1));

// productOfArray([1,2,3,10]) // 60
//

function recursiveRange(num) {
  if (num <= 0) {
    return num;
  }
  return (num += recursiveRange(num - 1));
}
console.log(recursiveRange(10));
