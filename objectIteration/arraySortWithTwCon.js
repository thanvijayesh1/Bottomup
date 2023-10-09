const students = [
    { name: "Alice", grade: 90, age: 20 },
    { name: "Bob", grade: 85, age: 22 },
    { name: "Charlie", grade: 90, age: 21 },
    { name: "David", grade: 88, age: 20 },
    { name: "Eve", grade: 85, age: 19 },
  ];
  
  const sortedStudents = students.sort((a, b) => {
    if (a.grade !== b.grade) {
      return b.grade - a.grade;
    }
  
    return a.age - b.age;
  });
  
  console.log(sortedStudents);
  