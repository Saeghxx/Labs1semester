const output = {calculated: []};
function average(a, b) {
    return (a + b) / 2;
}
function square(a) {
    return a * a;
}
function cube(a) {
    return a * a * a;
}
function loops() {
    for (let i = 0; i <9; i++) {
        output.calculated.push({
            numbre: i,
            square: square(i),
            cube: cube(i),
            average: average(square(i), cube(i))
        });
    } 
}
loops();
console.dir(output);