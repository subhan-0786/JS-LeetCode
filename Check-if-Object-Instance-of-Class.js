/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === null || obj === undefined || typeof classFunction !== 'function') {
        return false;
    }
    let prototype = classFunction.prototype;
    obj = Object(obj);
    while (obj != null) {
        if (obj === prototype) return true;
        obj = Object.getPrototypeOf(obj);
    }
    return false;
};
