/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;  // track if function was already called
    let result;          // store the first result

    return function(...args) {
        if (!called) {
            result = fn(...args);
            called = true;
            return result;
        }
        return undefined; // subsequent calls return undefined
    }
};
