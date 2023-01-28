/** Class representing a Queue. 
 * @constructor
*/

export class Queue {

    constructor() {
        this._storage = {};
        this._length = 0;
        this._headIndx = 0;
    }
    /*
    * Enqueues a new value at the end of the queue
    * @param {*} value the value to enqueue
    */
    enqueue(value) {
        // TODO: argument validation
        const lastIndx = this._length + this._headIndx
        this._storage[lastIndx] = value;
        this._length++;
    }

    /*
    * Dequeues the value from the beginning of the queue and returns it
    * @return {*} the first and oldest value in the queue
    */
    dequeue() {
        if (this._length) {
            const firstval = this._storage[this._headIndx];
            delete this._storage[this._headIndx];
            this._length--;
            this._headIndx++;
            return firstval;
        } else {
            throw "There is no valuse to dequeue"
        }

    }
    /*
    * Returns the value at the beginning of the queue without removing it from the queue
    * @return {*} the first and oldest value in the queue
    */
    peek() {
        if (this._length) {
            return this._storage[this._headIndx]
        }
    }
}