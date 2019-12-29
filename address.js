// street
// city
// zipCode
// showAddress(address)

let address1 = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};
/// for in loop
function showAddress(address1) {
    for(let key in address1)
        console.log(key, address1[key]);
}
 showAddress(address1);

 ////////// factory function 
 ////////// factory function gives you a new object

 function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
 }
 let address2 = createAddress('a', 'b', 'c');
 console.log(address2);


 ///////// constructor funtion

 function Address(street, city, zipCode) {
     this.street = street;
     this.city = city;
     this.zipCode = zipCode;
 }
  let address3 = new Address('a', 'b', 'c');
  console.log(address3);