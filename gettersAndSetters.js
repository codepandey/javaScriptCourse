// Getters =>  access properties in a object
// Setters => change and mutate them

// const person = {
//     firstName: 'Rahul',
//     lastName: 'Pandey',
//     fullName() {
//         return `${person.firstName} ${person.lastName}`
//     }
// }
const person = {
    firstName: 'Rahul',
    lastName: 'Pandey',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName =  parts[1];
    }
}
person.fullName = 'Pandey Rahul'
// we can call this console without fullname as a method with the help of getters and setters
// console.log(person.fullName());
 console.log(person);