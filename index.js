import { Stack } from "./Stack.mjs";

const myStack = new Stack();

myStack.push("Mhmd");
myStack.push(1)

console.log("Storage after pushing", myStack._storage);
console.log("Stack length after pushing", myStack._length);

myStack.pop()

console.log("Storage after pop", myStack._storage);
console.log("Stack length after pop", myStack._length);

myStack.push("React");

const lastVal = myStack.peek();
console.log("the last value in the storage", lastVal);
console.log("Storage after pop", myStack._storage);

import { Queue } from "./Queue.mjs";

const myQ = new Queue();

myQ.enqueue("Ali");
console.log("Q", myQ);

myQ.enqueue("Mhmd");
const oldestQVal = myQ.peek();
console.log("oldestQVal", oldestQVal);

myQ.dequeue();
console.log("Q", myQ);








