/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/


function Person(name, age){ //constructor function, keyword function w/CapLetter name (params)
  this.name = name; //
  this.age = age;  
  this.stomach = [];
}
Person.prototype.eat = function(someFood){ //.prototype is used to abstract methods out of objects
  if(this.stomach.length < 10){ //this didn't work because this.stomach was missing .length// this also failed because 
    this.stomach.push(someFood);
  }
}
Person.prototype.poop = function(){ //keep all methods/function out of Constructor functions
  this.stomach = [];
}
Person.prototype.toString = function(){ //since you start with Person, you can use this thereafter
  return `${this.name}, ${this.age}`;
}

const brian = new Person("Brian", 29); //var name = NEW [] Person (arruments to fill into template)
// console.log(brian.eat('apples'));
// console.log(brian.stomach);
// console.log(brian.eat('rice'));
// console.log(brian.stomach);
// console.log(brian.poop());


/*
  TASK 2
[x]    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
[x]    - All instances built with Car:
[x]        + should initialize with an `tank` at 0
[x]        + should initialize with an `odometer` at 0
[]    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
[]    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
[]        + Should cause the `odometer` to go up.
[]        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
[]    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
[]        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model,
  this.milesPerGallon = milesPerGallon,
  this.tank = 0,
  this.odometer = 0;
}
Car.prototype.fill = function(gallons){
  this.tank = this.tank + gallons; //motherfucking WIN! += is the same as this.tank = this.tank + gallons. Both work, both pass!
}

const myCar = new Car("bimmer", 25);
console.log(myCar);










/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  this.favoriteToy = favoriteToy;

Person.call(this, name, age)
}
Baby.prototype = Object.create(Person.prototype)

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
}

const littleBrian = new Baby('Brian', 2, "play_mobile")
console.log(littleBrian);
console.log(littleBrian.age);
console.log(littleBrian.play());

// function Baby(favoriteToy) {
//   Person.call(this, favoriteToy)
//     this.favoriteToy = favoriteToy;
//   }
//   Baby.prototype = Object.create(Person.prototype)
//   Baby.prototype.play = function(){
//     return `Playing with ${this.favoriteToy}`;
//   }
























/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Window Binding - when you use this in the global scope and returns the window object, aka all of js
  2. Implicit Binding - when you use this is used withIN an object and is actived
  3. Explicit Binding - .call() immediately invokes the function, pass in items 1 by 1
                        .apply() also immediate, pass in as an array
                        .bind() passed in 1 by 1 but does not immediately invoke the function, instead it returns a brand new function that can be invoked later.
  4. New Binding. using a 'new' keyword constructs a new object and 'this' points to it
  when a functino is invoked as a constructor function using the 'new' keyword, 'this' points to the new object that was created.
*/

/*function speak(){
  console.log(this.bark);
}

const Ada = {
  bark: 'woof woof',
}

const Noa = {
  bark: 'bark bark',
}

speak.call(Ada);

const goodDog = speak.bind(Ada);
goodDog();

const badDog - speak.bind(Noa);
badDog(); */














///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}








// function Pet(attributes){
//   this.name = attributes.name;
//   this.age = attributes.age;
//   this.phrase = attributes.phrase;
// }
// Pet.prototype.speak = function(){
//   return `${this.name} says ${this.phrase}`;
// }
// function BabyPet(attributes){
//   Pet.call(this, attributes) //Pet tells the parent. and binding this to the pet/parrent
// }
// //tell child/babypet inherit the method
// BabyPet.prototype = Object.create(Pet.prototype) //giving hte babypet the ability to speak because Pet prototye is speak
// const bigPet = new Pet({
// })
// const littlePete = new BabyPet({ //() because it's a function {} because we're passing in object key pairs
//   name: 'B',
//   age: 2,
// })
// when the function is invoked we look to the left of the doNotTrack. that's what this refers to.