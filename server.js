// OOP
// object oriented programming

// {
//     title:"rome"
// }

let car1 = {
    color: "red",
    brand: "tesla",
    speed: "200",
    drive() {
        console.log("driving...")
    }
}

let car2 = {
    color: "red",
    brand: "volvo",
    speed: "100",
    drive() {
        console.log("driving...")
    }
}

// function Car(color, brand, speed) {
//     this.color = color
//     this.brand = brand;
//     this.speed = speed;
//     // this.drive1 = function () {
//     //     console.log("driving...")
//     // }
// }

// Car.prototype.drive = function () {
//     console.log("driving...")
// }


class Car {
    constructor(color, brand, speed) {
        this.color = color
        this.brand = brand;
        this.speed = speed;
    }

    drive() {
        console.log("driving...")
    }
}

let car3 = new Car("red", "volov", 1200);
let car4 = new Car("yellow", "tesla", 1200);


// inheritence 
// when we have some new properties and features 
class Ferrari extends Car {
    constructor(color, brand, speed) {
        super(color, brand, speed)
    }
    #is_selective;

    // setter and getter method

    setSelective(status) {
        this.#is_selective = status
    }
    getSelective() {
        return this.#is_selective;
    }

}

console.log(car3);
console.log(car4);
console.log(car4.drive());

console.log(typeof (Car));

let ferrari = new Ferrari("red", "ferrari", 1200);
ferrari.setSelective(true)
console.log(ferrari);
console.log(ferrari.getSelective());


// abstraction
// only showing the feature not the implementation







