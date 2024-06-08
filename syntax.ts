// Importing necessary libraries
import { readFileSync, writeFileSync } from 'fs';

// Basic Types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];

// Enum for defining a set of named constants
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let dir: Direction = Direction.Up;

// Interface for type checking
interface User {
    name: string;
    age: number;
}

let user: User = { name: "Alice", age: 25 };

// Class for defining objects with properties and methods
class Animal {
    private name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    public move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

let dog = new Animal("Dog");
dog.move(10);

// Generic function
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");  // Works with string
let numberOutput = identity<number>(10);    // Works with number

// Data Structures: Stack (LIFO)
class Stack<T> {
    private elements: T[] = [];

    push(element: T): void {
        this.elements.push(element);
    }

    pop(): T | undefined {
        return this.elements.pop();
    }
}

let stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1

// Algorithm Example: Binary Search
function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midVal = arr[mid];

        if (midVal === target) {
            return mid;
        } else if (midVal < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Element not found
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7];
const target = 5;
const result = binarySearch(sortedArray, target);
console.log(result); // 4 (index of 5 in sortedArray)

// Read from file (Node.js specific)
const fileContent: string = readFileSync('example.txt', 'utf8');
console.log(fileContent);

// Write to file (Node.js specific)
writeFileSync('output.txt', 'Hello, TypeScript!');

// TypeScript allows defining complex types and ensuring type safety while still supporting modern JavaScript features.

