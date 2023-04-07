//01. Destructring arrays
/* const arr = [10, 20, 30, 40, 50];
const [fNum, secondNum, , fourNum] = arr;
console.log(fNum, secondNum, fourNum); */

//02. Destructring objects
/* const student = {
  fName: "Shm",
  lName: "Usuf",
  id: "D-16008",
};

const { fName, lName } = student;
console.log(fName, lName); */

//03. The Spread Operator (...)
/* const arr = [1, 3, 4, 5, 6, 9];
const newArr = [...arr];
newArr.pop();

console.log(arr);
console.log(newArr);

const human = {
  name: "Jhon Doe",
  lang: "English",
};

const animal = { ...human };
animal.name = "Tiger";
animal.lang = "null";
console.log(human);
console.log(animal); */

//04. Rest Pattern and Parameters
/* const friends = ["atik", "jony", "arif", "alia"];
const [closeFriend, ...others] = friends;
// console.log(closeFriend, others);

const user = {
  name: "John",
  age: 25,
  skills: "programmer",
  income: 15000,
};

const { name, skills, ...rest } = user;
console.log(name, skills, rest); */

// 05. Short Circuiting (&& and ||)
// let money = 100;
// money >= 50 && console.log("I am rich");

// 06. The Nullish Coalescing Operator (??)
/* let money = 0;
money ?? (money = 10);
console.log(money); */

// 07. Enhanced Object Literals
/* let burgerPrice = 250;
const restaurant = {
  name: "Puran Dhaka Burger House",
  burgerPrice,
};

console.log(restaurant); */
