// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) {
        return [];
    } else if (matrix.length === 1) {
        return matrix;
    }
    let answer = typeof matrix[0] === "object" ? [matrix[0][0]] : [];
    for (let i = 0; i < matrix.length; i++) {
        if (typeof matrix[i] === "object") {
            if (i % 2 == 1) {
                for (let k = matrix[i].length - 1; k >= 0; k--) {
                    answer.push(matrix[i][k]);
                }
            } else {
                for (let k = 0; k < matrix[i].length; k++) {
                    if (i === 0 && k === 0) {
                        continue;
                    }
                    answer.push(matrix[i][k]);
                }
            }
        } else if (typeof matrix[i] === "number") {
            return matrix;
        }
    }
    return answer;
};
