const random = (min = 0, max = 100) => {
    return Math.floor(Math.random() * max);
};
const gg = random(0, 100);
console.log(gg); 