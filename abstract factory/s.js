// Define a factory function that takes an input and returns an object
const createAnimal = (input) => {
    // Define a common interface for all animals
    const animal = {
        name: input.name,
        sound: input.sound,
        makeSound: function() {
            console.log(this.sound);
        },
    };

    // Define specific properties or methods for different types of animals
    const specificInfo = {
        dog: () => ({
            breed: input.breed,
            fetch: function() {
                console.log("I can fetch!");
            },
        }),
        cat: () => ({
            color: input.color,
            purr: function() {
                console.log("I can purr!");
            },
        }),
        bird: () => ({
            wingspan: input.wingspan,
            fly: function() {
                console.log("I can fly!");
            },
        }),
    };

    // Return the specific type of animal based on the input
    const additionalInfo = specificInfo[input.type] ?
        specificInfo[input.type] :
        null;
    if (!additionalInfo) {
        throw new Error("Invalid type specified.");
    }
    return {...animal, ...additionalInfo };
};

// Create different types of animals using the factory function
const dog = createAnimal({ type: "dog", name: "Rex", sound: "Woof", breed: "Labrador" });
const cat = createAnimal({ type: "cat", name: "Fluffy", sound: "Meow", color: "Black" });
const bird = createAnimal({ type: "bird", name: "Tweety", sound: "Tweet", wingspan: "15 cm" });

// Test the common interface and the specific properties or methods of each animal
dog.makeSound(); // Woof

// dog.fetch(); // I can fetch!
cat.makeSound(); // Meow
// cat.purr(); // I can purr!
bird.makeSound(); // Tweet
// bird.fly(); // I can fly!
const s = createAnimal({ type: null, name: "Tweety", sound: "Tweet", wingspan: "15 cm" })
s.makeSound()