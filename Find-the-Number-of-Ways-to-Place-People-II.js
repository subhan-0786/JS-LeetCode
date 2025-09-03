/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function(points) {
    // Sort points by x ascending, then by y descending
    points.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return b[1] - a[1];
    });

    let ans = 0;

    for (let i = 0; i < points.length; i++) {
        let maxY = -Infinity;
        for (let j = i + 1; j < points.length; j++) {
            if (points[i][1] >= points[j][1] && points[j][1] > maxY) {
                ans++;
                maxY = points[j][1];
            }
        }
    }

    return ans;
};
