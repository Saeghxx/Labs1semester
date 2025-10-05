//Перший варіант перевіряє аргументи одразу
//Якщо є не функція, то кидає помилку і пайп не створюється (за умовою)
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

function pipe(...fns) {
  if (!fns.every(fn => typeof fn === 'function')) {
    throw new TypeError('Error');
  }
  return x => fns.reduce((val, fn) => fn(val), x);
}

const f1 = pipe(inc, twice, cube);
console.log(f1(5)); // 1728

const f2 = pipe(inc, inc);
console.log(f2(7)); // 9

try {
  const f3 = pipe(inc, 7, cube); 
  console.log(f3(1));
} catch (e) {
  console.error(e.message); // Error
}