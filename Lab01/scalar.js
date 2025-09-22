function inc(n){
    return n + 1;
}
const a = 7;
const b = inc(a);
console.dir ({a, b});


const c = {value: 5};
function incObj(gg){
    gg.value++;
}
console.dir(c);
incObj(c);
console.dir(c);