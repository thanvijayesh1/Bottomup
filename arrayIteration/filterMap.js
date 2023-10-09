const bookList = [
    {
        title: "Clouser",
        age: 10
    },
    {
        title: "Prototype",
        age: 22
    },
    {
        title: "Event_Loop",
        age: 33
    }
];
const ageThre=20
const filterMap = () => {
    return bookList
        .filter(item => item.age < ageThre)
        .map(person => person.title);
};

console.log(filterMap());
