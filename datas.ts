// Data Structures and Algorithms in TypeScript

// Array
const array: number[] = [1, 2, 3, 4, 5];
console.log("Array:", array);

// Linked List Node
class ListNode<T> {
    public data: T;
    public next: ListNode<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

// Linked List
class LinkedList<T> {
    private head: ListNode<T> | null = null;

    // Add a new node at the end of the list
    public append(data: T): void {
        const newNode = new ListNode(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Print the linked list
    public print(): void {
        let current = this.head;
        const elements: T[] = [];
        while (current !== null) {
            elements.push(current.data);
            current = current.next;
        }
        console.log("Linked List:", elements.join(" -> "));
    }
}

const linkedList = new LinkedList<number>();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.print();

// Stack (LIFO)
class Stack<T> {
    private elements: T[] = [];

    // Push an element onto the stack
    public push(element: T): void {
        this.elements.push(element);
    }

    // Pop an element from the stack
    public pop(): T | undefined {
        return this.elements.pop();
    }

    // Print the stack
    public print(): void {
        console.log("Stack:", this.elements);
    }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Popped from stack:", stack.pop());
stack.print();

// Queue (FIFO)
class Queue<T> {
    private elements: T[] = [];

    // Enqueue an element to the queue
    public enqueue(element: T): void {
        this.elements.push(element);
    }

    // Dequeue an element from the queue
    public dequeue(): T | undefined {
        return this.elements.shift();
    }

    // Print the queue
    public print(): void {
        console.log("Queue:", this.elements);
    }
}

const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Dequeued from queue:", queue.dequeue());
queue.print();

// Binary Tree Node
class TreeNode<T> {
    public data: T;
    public left: TreeNode<T> | null = null;
    public right: TreeNode<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

// Binary Search Tree
class BinarySearchTree<T> {
    private root: TreeNode<T> | null = null;

    // Insert a new node in the BST
    public insert(data: T): void {
        const newNode = new TreeNode(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // In-order traversal
    public inOrderTraversal(): void {
        this.inOrder(this.root);
    }

    private inOrder(node: TreeNode<T> | null): void {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }
}

const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(20);
bst.insert(5);
bst.insert(15);
bst.inOrderTraversal();

// Graph
class Graph {
    private adjacencyList: Map<number, number[]> = new Map();

    // Add a vertex
    public addVertex(vertex: number): void {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add an edge
    public addEdge(vertex1: number, vertex2: number): void {
        this.adjacencyList.get(vertex1)?.push(vertex2);
        this.adjacencyList.get(vertex2)?.push(vertex1);
    }

    // Breadth-First Search (BFS)
    public bfs(start: number): void {
        const visited = new Set<number>();
        const queue: number[] = [start];

        while (queue.length > 0) {
            const vertex = queue.shift()!;
            if (!visited.has(vertex)) {
                console.log(vertex);
                visited.add(vertex);
                const neighbors = this.adjacencyList.get(vertex) || [];
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);
                    }
                }
            }
        }
    }
}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
graph.bfs(1);

// Sorting: Quick Sort
function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const right = arr.filter(x => x > pivot);
    const middle = arr.filter(x => x === pivot);

    return [...quickSort(left), ...middle, ...quickSort(right)];
}

const unsortedArray = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(unsortedArray);
console.log("Quick Sorted Array:", sortedArray);

// Searching: Binary Search
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

const searchArray = [1, 2, 3, 4, 5, 6, 7];
const target = 5;
const index = binarySearch(searchArray, target);
console.log("Binary Search Result:", index);

// Dynamic Programming: Fibonacci
function fibonacci(n: number): number {
    const memo: number[] = [0, 1];
    for (let i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[n];
}

const fibNumber = 10;
console.log(`Fibonacci(${fibNumber}):`, fibonacci(fibNumber));
