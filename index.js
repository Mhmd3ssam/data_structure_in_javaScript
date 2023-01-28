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


