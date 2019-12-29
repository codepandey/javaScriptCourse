class User {
  constructor(firstname, lastname, credit) {
    this.firstName = firstname;
    this.lastname = lastname;
    this.credit = credit;
  }
  getFullName() {
    let fullName = `${this.firstName} ${this.lastname} is my full name`;
    return fullName;
  }

  editName(newname) {
    const myname = newname.split(" ");
    this.firstName = myname[0];
    this.lastName = myname[1];
  }
}

class Teacher extends User {
  constructor(firstname, lastname, credit, subject) {
    super(firstname, lastname, credit);
    this.subject = subject;
  }
  getFullName() {
    let fullName = `${this.firstName} 
    ${this.lastname} is my full name and I teach ${this.subject}`;
    return fullName;
  }
}

const john = new Teacher("rahul", "pandey", 45, "Maths");
// console.log(john);
console.log(john.getFullName());
john.editName("john Anderson");
console.log(john.getFullName());
