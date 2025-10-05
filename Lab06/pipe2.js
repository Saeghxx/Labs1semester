//Другий варіант перевіряє аргументи під час виклику функції i якщо є не функція, то повертає undefined 
//(Не за умовою, але він більш легший на мою думку)
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = pipe (inc, twice, cube);
console.log (f1 (5)); // 1728

const f2 = pipe (inc, inc);
console.log (f2 (7)); // 9

const f3 = pipe(inc, 7, cube);
console.log (f3 (1)); // undefined

function pipe (...fns) {
    return function (x) {
        for (const fn of fns) {
            if (typeof fn === 'function') {
                x = fn(x);
            } else {
                return undefined;
            }
        }
        return x;
    };
} 