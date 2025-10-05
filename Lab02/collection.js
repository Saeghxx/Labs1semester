//функція, яка приймає ім'я та номер телефону і повертає номер телефону за ім'ям
const telephoneBook = [
    { name: "Jake Kim", phone: "900-123-4567" },
    { name: "Samuel Seo", phone: "788-999-1234" },
    { name: "Eli Jang", phone: "555-555-5555" },
    { name: "Daniel Park", phone: "111-222-3333" },
];

function findPhoneByName(name) {
    const phone = telephoneBook.find(contact => contact.name === name);
    if (phone) {
        console.log(phone.phone);
        return phone.phone;
    }
    console.log("Contact not found");
    return "Contact not found";
}

findPhoneByName("Gun Park");
findPhoneByName("Daniel Park");
findPhoneByName("Samuel Seo");
findPhoneByName("Gitae Kim");

//те саме, але через об'єкт
const hash = {
    "Jake Kim": "900-123-4567",
    "Samuel Seo": "788-999-1234",
    "Eli Jang": "555-555-5555",
    "Daniel Park": "111-222-3333",
};
function bookhash(name) {
    return hash[name];
};
console.log(bookhash('Daniel Park'));
console.log(bookhash('Jake Kim'));
console.log(bookhash('Gun Park'));