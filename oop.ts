// OOP in TypeScript

// Base class - represents a generic animal
class Animal {
    // Private property - only accessible within the class
    private _name: string;
    
    // Protected property - accessible within the class and its subclasses
    protected _age: number;

    // Constructor - initializes the properties
    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // Public method - can be called from anywhere
    public move(distance: number): void {
        console.log(`${this._name} moved ${distance} meters.`);
    }

    // Getter for name - encapsulates the _name property
    public get name(): string {
        return this._name;
    }

    // Setter for name - encapsulates the _name property
    public set name(newName: string) {
        this._name = newName;
    }

    // Abstract method - must be implemented by subclasses
    public abstract makeSound(): void;
}

// Subclass - represents a specific type of animal
class Dog extends Animal {
    // Additional property specific to Dog
    private breed: string;

    // Constructor - initializes the base and additional properties
    constructor(name: string, age: number, breed: string) {
        super(name, age); // Call the parent class constructor
        this.breed = breed;
    }

    // Implement the abstract method
    public makeSound(): void {
        console.log('Woof! Woof!');
    }

    // Polymorphism - overriding the move method
    public move(distance: number): void {
        console.log(`${this.name}, a ${this.breed}, moved ${distance} meters.`);
    }

    // Method specific to Dog
    public fetch(): void {
        console.log(`${this.name} is fetching a ball.`);
    }
}

// Subclass - represents another specific type of animal
class Cat extends Animal {
    // Additional property specific to Cat
    private furColor: string;

    // Constructor - initializes the base and additional properties
    constructor(name: string, age: number, furColor: string) {
        super(name, age); // Call the parent class constructor
        this.furColor = furColor;
    }

    // Implement the abstract method
    public makeSound(): void {
        console.log('Meow! Meow!');
    }

    // Polymorphism - overriding the move method
    public move(distance: number): void {
        console.log(`${this.name}, a ${this.furColor} cat, moved ${distance} meters.`);
    }

    // Method specific to Cat
    public scratch(): void {
        console.log(`${this.name} is scratching.`);
    }
}

// Instantiate objects of the subclasses
const dog = new Dog('Buddy', 3, 'Golden Retriever');
const cat = new Cat('Whiskers', 2, 'Black');

// Demonstrate polymorphism
const animals: Animal[] = [dog, cat];
animals.forEach(animal => {
    animal.move(5);
    animal.makeSound();
});

// Accessing and modifying properties using getters and setters
console.log(dog.name); // Buddy
dog.name = 'Max';
console.log(dog.name); // Max

// Encapsulation - accessing private property through a method
dog.fetch();
cat.scratch();

// Abstract Class Example
abstract class Vehicle {
    // Abstract method - must be implemented by subclasses
    public abstract startEngine(): void;
    
    // Concrete method - common implementation
    public stopEngine(): void {
        console.log('Engine stopped.');
    }
}

// Subclass implementing the abstract method
class Car extends Vehicle {
    public startEngine(): void {
        console.log('Car engine started.');
    }
}

// Subclass implementing the abstract method
class Motorcycle extends Vehicle {
    public startEngine(): void {
        console.log('Motorcycle engine started.');
    }
}

// Instantiate objects of the subclasses
const car = new Car();
const motorcycle = new Motorcycle();

// Demonstrate abstract methods and polymorphism
const vehicles: Vehicle[] = [car, motorcycle];
vehicles.forEach(vehicle => {
    vehicle.startEngine();
    vehicle.stopEngine();
});
