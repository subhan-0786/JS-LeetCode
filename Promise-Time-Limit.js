
function timeLimit(fn, t) {
  return async function (...args) {
    const promises = [
      new Promise(resolve => resolve(fn(...args))), 
      new Promise((_, reject) =>
        setTimeout(() => reject('Time Limit Exceeded'), t)
      )
    ];
    return Promise.race(promises);
  };
}