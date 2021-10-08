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