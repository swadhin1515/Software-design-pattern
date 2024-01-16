// The Job class
class Job {
    constructor(title, description, location, salary) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.salary = salary;
        this.observers = []; // The list of observers
    }

    // Add an observer to the list
    addObserver(user) {
        this.observers.push(user);
    }

    // Remove an observer from the list
    removeObserver(user) {
        let index = this.observers.indexOf(user);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    // Notify all observers with a message
    notifyObservers(message) {
        for (let observer of this.observers) {
            observer.update(message);
        }
    }
}

// The User class
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // Update the user with a message
    update(message) {
        // Perform some action based on the message
        // For example, display a notification or send an email
        console.log(`${this.name} received a message: ${message}`);
    }
}

// Create some users
let alice = new User("Alice", "alice@example.com");
let bob = new User("Bob", "bob@example.com");
let charlie = new User("Charlie", "charlie@example.com");

// Create a job
let job = new Job("Software Engineer", "Develop web applications using JavaScript", "New York", "$100K");

// Add some observers to the job
job.addObserver(alice);
job.addObserver(bob);

// Notify the observers with a message
job.notifyObservers("The job is still open. Apply now!");

// Output:
// Alice received a message: The job is still open. Apply now!
// Bob received a message: The job is still open. Apply now!

// Remove an observer from the job
job.removeObserver(bob);

// Add another observer to the job
job.addObserver(charlie);

// Notify the observers with another message
job.notifyObservers("The deadline for the job is tomorrow. Hurry up!");

// Output:
// Alice received a message: The deadline for the job is tomorrow. Hurry up!
// Charlie received a message: The deadline for the job is tomorrow. Hurry up!