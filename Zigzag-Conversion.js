/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) return s;

    const rows = new Array(numRows).fill('').map(() => '');

    let curRow = 0;
    let goingDown = false;

    for (const char of s) {
        rows[curRow] += char;
        // Change direction if we hit top or bottom row
        if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
        curRow += goingDown ? 1 : -1;
    }

    return rows.join('');
};
