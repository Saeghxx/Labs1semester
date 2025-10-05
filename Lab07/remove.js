const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(array1, 5);
console.log(array1);
// Результат: [1, 2, 3, 4, 6, 7]

function removeElement(array, item) {
    return array.reduce((acc, el) => {
        if (el !== item) acc.push(el);
        return acc;
    }, []);
}

let array = [1, 2, 3, 4, 5, 6, 7];
array = removeElement(array, 5);
console.log(array); // [1, 2, 3, 4, 6, 7]


