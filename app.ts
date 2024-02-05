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

const person = {
	name: "Max",
  age: 30,
  hobbies: ['Sports','Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of favoriteActivities) {
  console.log(hobby.toUpperCase()); // Typescript inference allows the string within the array to use toUpperCase.
  
  // Typescript inference doesn't allows the string values within the array to use map function.
  // console.log(hobby.map()); // !!! ERROR !!!
}
