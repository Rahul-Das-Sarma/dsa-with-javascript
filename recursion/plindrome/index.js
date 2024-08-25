const palindrome = (str, i, j) => {
  if (i > j) {
    return true;
  }
  return str[i] === str[j] && palindrome(str, i + 1, j - 1);
};

const str = "lol";

console.log(palindrome(str, 0, str.length - 1));
