const result = unique([2, 1, 1, 3, 2]);
console.log(result);
// Результат: [2, 1, 3]

function unique(array) {
    return [...new Set(array)];
}