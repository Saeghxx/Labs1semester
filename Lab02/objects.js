const fn = () => {
    const obj1 = {name: 'Jake'}; //змінна object1 - константа, тому можемо змінити тільки властивість об'єкту, а не присвоїти інше значення
    let obj2 = {name: 'Jake'}; //змінна object2 - змінна, тому можемо змінити і властивість об'єкту, і присвоїти інше значення
    console.log(obj1, obj2);
    obj1.name = 'Samuel';
    obj2.name = 'Samuel';
    console.log(obj1, obj2);
    //obj1 = {name: 'Daniel'};
    obj2 = {name: 'Daniel'};
    console.log(obj1, obj2);
};
fn();  

function createUser (name, city) {
    return {name, city};
}
console.log(createUser('Jake', 'Seoul'));