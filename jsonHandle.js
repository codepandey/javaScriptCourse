const student = {
  name: "Rahul",
  age: 26,
  isActive: true
};

// convert this object into string to be stored in localStorage

const studentObjToString = JSON.stringify(student);
console.log(typeof studentObjToString);

localStorage.setItem("student", studentObjToString);

const toJsonStudent = JSON.parse(studentObjToString);
console.log(typeof toJsonStudent);
console.log(toJsonStudent.name);
