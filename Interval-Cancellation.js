/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // call immediately once
    fn(...args);

    // schedule repeated execution
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // return cancel function
    return function cancel() {
        clearInterval(intervalId);
    };
};
