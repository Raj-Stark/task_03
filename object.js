// let obj = {
//     name:"Raj",
//     address:{
//         city:"Bareilly",
//         state:"UP"
//     }
// }

// let user = JSON.parse(JSON.stringify(obj)) // ! It has some disadvantage like function aur date ki deep copy nhi bangei

// user.name = "Anhsu"
// user.address.city = "Varanasi";

// console.log(user);

// console.log(obj);

// ! Looping over Objects

let obj = {
  name: "Raj",
  address: {
    city: "Bareilly",
    state: "UP",
  },
};

for (const key of Object.entries(obj)) {
  console.log(key);
}

for (const key of Object.keys(obj)) {
  console.log(key);
}

for (const key of Object.values(obj)) {
  console.log(key);
}

// ! Ways for creating object

const litral = { name: "Raj", age: 23 };

// ! Object Constructor

const user = new Object();

user.name = "Shafi";
user.company = "Fisdom";

// ! Constructor Function

function User(name, age, isEmployed) {
  this.name = name;
  this.age = age;
  this.isEmployed = isEmployed;
}

const raj = new User("Raj", 23, false);

// ! Factory Function

function Person(name, age) {
  return {
    name: name,
    age: age,
  };
}


// ! ES6 classes 

class NewPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  welcome() {
    console.log(`Welcome ${this.name} & your age is ${this.age}`);
  }
}
