const fn = () => {
    const obj1 = {name: 'Jake'};
    let obj2 = {name: 'Jake'};
    console.log(obj1, obj2);
    obj1.name = 'Kim';
    obj2.name = 'Kim';
    console.log(obj1, obj2);
    //obj1 = {name: 'Jake Kim'};
    obj2 = {name: 'Jake Kim'};
    console.log(obj1, obj2);
};
fn();  

function createUser (name, city) {
    return {name, city};
}
console.log(createUser('Jake Kim', 'Seoul'));