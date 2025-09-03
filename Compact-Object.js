/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj
            .map(compactObject)
            .filter(val => Boolean(val));
    }
    if (obj !== null && typeof obj === 'object') {
        const result = {};
        for (const [key, val] of Object.entries(obj)) {
            const compactedVal = compactObject(val);
            if (Boolean(compactedVal)) {
                result[key] = compactedVal;
            }
        }
        return result;
    }
    return obj;
};
