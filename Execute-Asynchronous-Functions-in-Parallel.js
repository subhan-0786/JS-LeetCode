/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;
        if (functions.length === 0) return resolve(results);

        functions.forEach((fn, index) => {
            Promise.resolve()
                .then(fn)
                .then(value => {
                    results[index] = value;
                    completed++;
                    if (completed === functions.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
};
