/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    if (n >= 5000) return 1.0;  // Large n approximation shortcut
    
    const m = Math.floor((n + 24) / 25);  // Scale down by 25 ml units
    const memo = new Map();
    
    function dp(a, b) {
        if (a <= 0 && b <= 0) return 0.5;  // Both run out simultaneously
        if (a <= 0) return 1.0;            // A runs out first
        if (b <= 0) return 0.0;            // B runs out first
        
        const key = a * 10000 + b;  // Unique composite key
        if (memo.has(key)) {
            return memo.get(key);
        }
        
        const prob = 0.25 * (
            dp(a - 4, b) +
            dp(a - 3, b - 1) +
            dp(a - 2, b - 2) +
            dp(a - 1, b - 3)
        );
        
        memo.set(key, prob);
        return prob;
    }
    
    return dp(m, m);
};
