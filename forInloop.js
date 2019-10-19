
// How to get object properties

// we can use Dot Notation
// person.name


// or Bracket Notation
// person['name']

        const person = {
            name: 'Rahul',
            age: 25
        }
        // for (let key in person) {
        //     console.log(key);
        // }

        for (let key in person) {
            console.log(key, person[key]);
        }

////How to use forInLoop with array

   const colors = ['red', 'blue', 'green'];
   for (let index in colors)
    console.log(index, colors[index]);



