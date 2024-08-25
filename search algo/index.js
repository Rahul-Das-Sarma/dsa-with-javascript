const val = 1900;
const arr = [100, 21, 35, 65, 45, 22, 19, 254, 64, 65, 8, 4, 5, 6, 56];
function linearSearch(array) {
  //   let isTrue = false;
  //   let pos = null;
  //   array.forEach((element, i) => {
  //     if (element === val) {
  //       isTrue = true;
  //       pos = i;
  //     }
  //   });

  //   return { isTrue, pos };
  const ans = array.indexOf(val);
  return ans;
}

const ans = linearSearch(arr);
console.log(ans);
