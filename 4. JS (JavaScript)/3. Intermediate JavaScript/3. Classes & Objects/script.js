console.clear();

// Classes serves as blueprints for creating objects. They allows you to define objects with similar properties and methods in a reusable manner.

// The constructor method is used to create an object and initialize it with properties and methods. It is called when a new object is created from the class.

// this keyword refers to the current context (empty object).

// new keyword is used to create a new object from the class and before calling the constructor method we can define properties and methods.

class Person {
    constructor(name, age, gender, fees, RollNumber) {

        this.name = name;

        this.age = age;

        this.gender = gender;

        this.fees = fees;

        this.RollNumber = RollNumber;
    }

    discountFees(discount) {

        let newPrice = this.fees - (this.fees * discount / 100);

        return newPrice;
    }

    greeting() {

        console.log(`Hello, my name is ${this.name}. I am ${this.age} years old. I am a ${this.gender}. My original fees is ${this.fees}. My Roll Number is ${this.RollNumber}.`);
    }
}

const person1 = new Person('John', 25, 'male', 70000 , 45);

person1.greeting();

console.log("The discounted price is: " + person1.discountFees(10) + ". Thank you.");

console.log("\n");

const person2 = new Person('Jane', 30, 'female', 60000, 15);

person2.greeting();

console.log("The discounted price is: " + person2.discountFees(15) + ". Thank you.");

console.log("\n");