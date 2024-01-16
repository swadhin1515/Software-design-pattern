// Define the subject
function Subject() {
    this.observers = []; // A list of observers
}

// Add methods to the subject prototype
Subject.prototype = {
    // Subscribe an observer to the subject
    subscribe: function(observer) {
        this.observers.push(observer);
    },
    // Unsubscribe an observer from the subject
    unsubscribe: function(observer) {
        this.observers = this.observers.filter(function(item) {
            return item !== observer; // Remove the observer from the list
        });
    },
    // Notify all the observers of a change
    notify: function(data) {
        this.observers.forEach(function(observer) {
            observer.update(data); // Call the update method of each observer
        });
    }
};

// Define an observer
function Observer(name) {
    this.name = name; // A name for the observer
}

// Add a method to the observer prototype
Observer.prototype = {
    // Update the observer with some data
    update: function(data) {
        console.log(this.name + " received: " + data); // Log the data
    }
};

// Create a subject and some observers
var subject = new Subject();
var observer1 = new Observer("Observer 1");
var observer2 = new Observer("Observer 2");
var observer3 = new Observer("Observer 3");

// Subscribe the observers to the subject
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

// Notify the observers of some changes
subject.notify("Hello, observers!"); // All observers receive the message
subject.unsubscribe(observer2); // Unsubscribe observer 2
subject.notify("Goodbye, observers!"); // Only observer 1 and 3 receive the message