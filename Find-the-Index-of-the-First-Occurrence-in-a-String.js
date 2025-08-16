/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") return 0;

  let n1 = haystack.length;
  let n2 = needle.length;

  for (let i = 0; i <= n1 - n2; i++) {
    let match = true;
    for (let j = 0; j < n2; j++) {
      if (haystack[i + j] !== needle[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }

  return -1;
};