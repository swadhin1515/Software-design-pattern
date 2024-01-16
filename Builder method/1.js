// This is a class that defines a car object
class Car {
    // These are the properties of the car object
    // They are set to null by default
    color = null;
    doors = null;
    engine = null;

    // This is a method that sets the color property
    setColor(color) {
        // This is how you assign a value to a property
        this.color = color;
        // This is how you return the same object
        // This allows you to chain multiple methods
        return this;
    }

    // This is a method that sets the doors property
    setDoors(doors) {
        this.doors = doors;
        return this;
    }

    // This is a method that sets the engine property
    setEngine(engine) {
        this.engine = engine;
        return this;
    }

    // This is a method that prints the properties of the car object
    show() {
        console.log("This car has:");
        console.log("Color: " + this.color);
        console.log("Doors: " + this.doors);
        console.log("Engine: " + this.engine);
    }
}

// This is how you create a new car object using the builder method
// You can use the dot operator to chain the methods
// You can use any value or type you want for the properties
let car = new Car()
    .setColor("red")
    .setDoors(4)
    .setEngine("V8");

// This is how you show the properties of the car object
x = car.show();