const person = {
    name: 'Alice',
    age: 30,
    country: 'USA',
    job: 'Engineer'
};
const obj = {}
const filteredKeys = Object.keys(person).filter((key) => {
    if (person[key] !== "Alice") {
        obj[key] = person[key]
    }
});
console.log(filteredKeys, onj); 