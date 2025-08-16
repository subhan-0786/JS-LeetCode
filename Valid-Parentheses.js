/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = { ")": "(", "}": "{", "]": "[" };
    
    for (let char of s) {
        if (char in map) {
            // closing bracket → check top of stack
            if (stack.pop() !== map[char]) return false;
        } else {
            // opening bracket → push
            stack.push(char);
        }
    }
    return stack.length === 0;
};