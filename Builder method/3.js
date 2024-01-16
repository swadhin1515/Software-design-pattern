// This is a class that defines a quiz object
class Quiz {
    // These are the properties of the quiz object
    // They are set to null by default
    title = null;
    questions = [];

    // This is a method that sets the title property
    setTitle(title) {
        // This is how you assign a value to a property
        this.title = title;
        // This is how you return the same object
        // This allows you to chain multiple methods
        return this;
    }

    // This is a method that adds a question object to the questions array
    addQuestion(question) {
        this.questions.push(question);
        return this;
    }

    // This is a method that prints the properties of the quiz object
    show() {
        console.log("This quiz has:");
        console.log("Title: " + this.title);
        console.log("Questions: ");
        // This is how you loop through the questions array
        for (let i = 0; i < this.questions.length; i++) {
            // This is how you access the properties of each question object
            console.log((i + 1) + ". " + this.questions[i].text);
            console.log("Choices: " + this.questions[i].choices.join(", "));
            console.log("Answer: " + this.questions[i].answer);
        }
    }
}

// This is a class that defines a question object
class Question {
    // These are the properties of the question object
    // They are set to null by default
    text = null;
    choices = [];
    answer = null;

    // This is a method that sets the text property
    setText(text) {
        this.text = text;
        return this;
    }

    // This is a method that adds a choice to the choices array
    addChoice(choice) {
        this.choices.push(choice);
        return this;
    }

    // This is a method that sets the answer property
    setAnswer(answer) {
        this.answer = answer;
        return this;
    }
}

// This is how you create a new quiz object using the builder method
// You can use the dot operator to chain the methods
// You can use any value or type you want for the properties
let quiz = new Quiz()
    .setTitle("JavaScript Quiz")
    .addQuestion(
        new Question()
        .setText("What is the output of console.log(typeof null)?")
        .addChoice("null")
        .addChoice("object")
        .addChoice("undefined")
        .addChoice("string")
        .setAnswer("object")
    )
    .addQuestion(
        new Question()
        .setText("What is the output of console.log(0.1 + 0.2 == 0.3)?")
        .addChoice("true")
        .addChoice("false")
        .addChoice("undefined")
        .addChoice("NaN")
        .setAnswer("false")
    );

// This is how you show the properties of the quiz object
quiz.show();