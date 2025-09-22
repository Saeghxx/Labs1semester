function countTypes(array) {
    for (let i = 0; i < array.length; i++){
        let type = typeof array[i];
        if (type in gg) 
            gg[type]++;
        else 
            gg[type] = 1;
}
}


const gg = {};
const array = [5, true, "hello", 6, "world", {a: 1}, false, null];
countTypes(array);
console.dir(gg);