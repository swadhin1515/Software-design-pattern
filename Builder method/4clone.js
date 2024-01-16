// Define a Car constructor function with some properties
function Car(color, spoiler, fuelType, productionDate) {
    this.color = color;
    this.spoiler = spoiler;
    this.fuelType = fuelType;
    this.productionDate = productionDate;
}

// Define the builder methods on the prototype of the Car function
Car.prototype.setColor = function(color) {
    this.color = color;
    // Each method returns the Car object itself
    // This allows for chaining of methods
    return this;
};

Car.prototype.setSpoiler = function(spoiler) {
    this.spoiler = spoiler;
    return this;
};

Car.prototype.setFuelType = function(fuelType) {
    this.fuelType = fuelType;
    return this;
};

Car.prototype.setProductionDate = function(date) {
    this.productionDate = date;
    return this;
};

// We should be able to print information about the car according to its parameters
Car.prototype.toString = function() {
    return `color: ${this.color}
spoiler: ${this.spoiler}
fuel type: ${this.fuelType}
production date: ${this.productionDate}`;
};

// Now we can use the constructor function to create a car object
const car = new Car()
    .setColor("red")
    .setSpoiler(true)
    .setFuelType("petrol")
    .setProductionDate(new Date("2020-09-21"));

// We can print the car information to the console
console.log(car.toString());