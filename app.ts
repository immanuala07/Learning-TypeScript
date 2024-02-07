// Typescript Object
/*
  const person = {
    name: string;
    age: number;
  } = {
    name: "Max",
    age: 30
  };
*/

// Typescript Nested Object & Types
/*
  const product = {
    id: string;
    price: number;
    tags: string[];
    details: {
      title: string;
      description: string;
    }
  } = {
    id: "abc1",
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title:"Red Carpet",
      description:`A great carpet - almost brand new!`
    }
  };
*/

// const person:{
//   name: string;
//   age: number;
//   hobbies: string[];
//   /*
//   Tuples - A tuple is a typed array with a pre - defined length and types for each index.
//   Tuples are great because they allow each element in the array to be a known type of value.
//   Tuples in TypeScript supports various operations like pushing a new item,
//   removing an item from the tuple, etc.
//   */
//   role: [number, string];
// } = {
//   name: "Max",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "Author"]
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

/*
Tuples in TypeScript supports various operations like pushing a new item,
removing an item from the tuple, etc.
*/
// person.role.push('admin');

// person.role[1] = "10";

// person.role = [0, "admin", "user"];

let favoriteActivities: any[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of favoriteActivities) {
  console.log(hobby.toUpperCase()); // Typescript inference allows the string within the array to use toUpperCase.

  // Typescript inference doesn't allows the string values within the array to use map function.
  // console.log(hobby.map()); // !!! ERROR !!!
}
