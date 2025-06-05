class Engine {
    start() {
        return "Engine started";
    }
}

class Car {
    constructor() {
        this.engine = new Engine();
    }

    startCar() {
        return this.engine.start();
    }
}

const car = new Car();
console.log(car.startCar()); // "Engine started"

// anonymous class
const Vehicle = class {
    constructor(type) {
        this.type = type;
    }

    getType() {
        return this.type;
    }
};

const myVehicle = new Vehicle("car");
console.log(myVehicle.getType()); // "car"