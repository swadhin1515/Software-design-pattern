// Define a Car class with some properties
class Car {#
    color = null;#
    spoiler = null;#
    fuelType = null;#
    productionDate = null;

    // Define a static Builder class within Car
    static Builder = class {
        // The builder class will have the same attributes as the parent

        color = null;#
        spoiler = null;#
        fuelType = null;#
        productionDate = null;

        // There are four methods to set each of the four attributes
        setColor(color) {
            this.#color = color;
            // Each method returns the builder object itself
            // This allows for chaining of methods
            return this;
        }

        setSpoiler(spoiler) {
            this.#spoiler = spoiler;
            return this;
        }

        setFuelType(fuelType) {
            this.#fuelType = fuelType;
            return this;
        }

        setProductionDate(date) {
            this.#productionDate = date;
            return this;
        }

        // When we're done setting arguments, we can call the build method
        // To give us the Car instance
        build() {
            const car = new Car(
                this.#color,
                this.#spoiler,
                this.#fuelType,
                this.#productionDate
            );
            return car;
        }
    };

    constructor(color, spoiler, fuelType, productionDate) {
        this.#color = color;
        this.#spoiler = spoiler;
        this.#fuelType = fuelType;
        this.#productionDate = productionDate;
    }

    // We should be able to print information about the car according to its parameters
    toString() {
        return `color: ${this.#color}
spoiler: ${this.#spoiler}
fuel type: ${this.#fuelType}
production date: ${this.#productionDate}`;
    }
}

// Now we can use the builder class to create a car object
const car = new Car.Builder()
    .setColor("red")
    .setSpoiler(true)
    .setFuelType("petrol")
    .setProductionDate(new Date("2020-09-21"))
    .build();

// We can print the car information to the console
console.log(car.toString());