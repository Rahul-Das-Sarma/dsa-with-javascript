// Annagram
function Annagram(str1, str2) {
  if (str1.length !== str2.length) return console.log("Not an annagram");
  let str1Frequency = {};
  let str2Frequency = {};
  for (val of str1) {
    str1Frequency[val] = (str1Frequency[val] || 0) + 1;
  }
  for (val of str2) {
    str2Frequency[val] = (str2Frequency[val] || 0) + 1;
  }
  for (key in str1Frequency) {
    if (!(key in str2Frequency)) return console.log("Not an annagram");
    if (str1Frequency[key] !== str2Frequency[key])
      return console.log("Not an annagram");
  }

  return console.log("Its an annagram");
}
str1 = "catt";
str2 = "taac";
Annagram(str1, str2);
