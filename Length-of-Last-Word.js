var lengthOfLastWord = function(s) {
  let i = s.length - 1;
  let length = 0;

  // Skip trailing spaces
  while (i >= 0 && s[i] === ' ') {
    i--;
  }

  // Count characters in the last word
  while (i >= 0 && s[i] !== ' ') {
    length++;
    i--;
  }

  return length;
};
