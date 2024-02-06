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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
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
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, favoriteActivities_1 = favoriteActivities; _i < favoriteActivities_1.length; _i++) {
    var hobby = favoriteActivities_1[_i];
    console.log(hobby.toUpperCase()); // Typescript inference allows the string within the array to use toUpperCase.
    // Typescript inference doesn't allows the string values within the array to use map function.
    // console.log(hobby.map()); // !!! ERROR !!!
}
