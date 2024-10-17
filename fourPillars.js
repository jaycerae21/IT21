// 1. Encapsulation: Using private fields (#) to hide data from external access
class Person {
    // Private fields (Encapsulation)
    #name;
    #age;
    #occupation;

    // Constructor to initialize Person's properties
    constructor(name, age, occupation) {
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
    }

    // Getters to access private fields (Encapsulation)
    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get occupation() {
        return this.#occupation;
    }

    // Method to display person information (will be overridden in the child class)
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
    }

    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Occupation:</strong> ${this.occupation}
        `;
    }
}

// 2. Inheritance: Creating a Student class that inherits from Person
class Student extends Person {
    constructor(name, age, occupation, major) {
        super(name, age, occupation); // Calling the parent class's constructor
        this.major = major;
    }

    // 4. Polymorphism: Overriding the displayInfo method to add major information
    displayInfo() {
        super.displayInfo(); // Calling the parent class method
        console.log("Major: " + this.major);
    }

    // Extending the displayInfoHTML method to include major in the HTML
    displayInfoHTML() {
        super.displayInfoHTML(); // Calling the parent class method
        const personElement = document.getElementById('personOne');
        personElement.innerHTML += `<br><strong>Major:</strong> ${this.major}`;
    }
}

// 3. Abstraction: Demonstrated by providing a generic method (displayInfo) in the parent class (Person) that can be specialized by child classes (Student)

// Creating an instance of the Student class
const studentOne = new Student('Marchilyn', 24, 'Instructor', 'Database Management');

// Polymorphism in action: The displayInfo method behaves differently for Student
studentOne.displayInfo(); // Output: Name, Age, Occupation, and Major

// Calling the HTML display method
studentOne.displayInfoHTML();
