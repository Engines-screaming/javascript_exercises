// refactor into es6 style
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

const createInstructor = (firstName, lastName) => ({firstName, lastName})

// refactor into es6 style 
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

let instructor = {
    firstName: 'Colt', 
    sayHi() {return 'Hi';}, 
    sayBye() {return this.firstName + ' says bye!';}
}

// createAnimal function
// Write a function which generates an animal object. The function should accepts 3 arguments:
    // species: the species of animal (‘cat’, ‘dog’)
    // verb: a string used to name a function (‘bark’, ‘bleet’)
    // noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
// Use one or more of the object enhancements we’ve covered.

function createAnimal(species, verb, noise) {
    return {species, [verb]() {return noise}};
}

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}d
s.bleet() //"BAAAAaaaa"

