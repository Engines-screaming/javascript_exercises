// Part 1: create a class for a vehicle

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        console.log("BEEP");
    }

    toString() {
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}`);
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."
myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."


// Part 2: create a class for car
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
myFirstCar.numWheels;  // 4


// Part 3: create a class for a motorcycle
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        console.log("VROOM");
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
myFirstMotorcycle.toString();  // "The vehicle is a Honda Nighthawk from 2000."
myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels;  // 2


// Part 4: create a garage class
class Garage {
    constructor(capacity) {
        this.capacity = 2;
        this.storage = [];
    }

    add(car) {
        if (this.storage.length === this.capacity) {
            console.log("Sorry, we're full");
        } else if (!(car instanceof Vehicle)) {
            console.log("Only vehicles are allowed in here!")
        } else {
            this.storage.push(car);
            console.log("Vehicle added");
        }
    }
}


let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"
garage.add(new Motorcycle("Honda", "Nighthawk", 2000));  // "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]
garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."