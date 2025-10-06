const contract =
  (fn, ...types) =>
  (...args) => {
    for (let i = 0; i < types.length - 1; i++) {
      const arg = args[i];
      const type = types[i];
      const name = type.name.toLowerCase();
      if (typeof arg !== name) {
        throw new TypeError(`Argument ${i} must be of type ${name}`);
      }
    }
const result = fn(...args);
const returnType = types[types.length - 1];
 const returnName = returnType.name.toLowerCase();
    if (typeof result !== returnName) {
      throw new TypeError(`Result must be of type ${returnName}`);
    }

    return result;
 };

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res); // Output: 5