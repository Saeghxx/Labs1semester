//через for...of
const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9

function max(array) {
    let max = -Infinity; 
    for (let row of array) {
        for (let value of row) {
            if (value > max) max = value;
        }
    }
    return max;
}

//через flat + reduce

const m1 = max1([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m1); // 9
function max1(array) {
    return array.flat().reduce((max, current) => Math.max(max, current));
}