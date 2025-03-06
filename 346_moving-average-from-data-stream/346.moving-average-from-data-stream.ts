class MovingAverage {
  maxValues: number;
  
  currentSum: number = 0;
  lastValues: number[] = [];
  
  constructor(size: number) {
    this.maxValues = size;
  }

  next(val: number): number {
    this.lastValues.push(val);
    if (this.lastValues.length > this.maxValues) {
      const last = this.lastValues.shift();
      this.currentSum -= last || 0;
    }

    this.currentSum = this.currentSum + val;

    return this.currentSum / this.lastValues.length;
  }
}

/**
* Your MovingAverage object will be instantiated and called as such:
* var obj = new MovingAverage(size)
* var param_1 = obj.next(val)
*/

// OBSERVATIONS
// An easy approach would be to store incoming values in an array or queue
// and just remove the earliest value once the size is > max.
// This is not ideal because it requires O(n) for storage

// ALGORITHM
// Instead of storing all values, we just need to track the next value to be removed
// along with the current sum
// 1. store a max size during initialization
// 2. store a push counter that will reset every max size

const movingAverage = new MovingAverage(3);
console.log(movingAverage.next(1)); // return 1.0 = 1 / 1
console.log(movingAverage.next(10)); // return 5.5 = (1 + 10) / 2
console.log(movingAverage.next(3)); // return 4.66667 = (1 + 10 + 3) / 3
console.log(movingAverage.next(5)); // return 6.0 = (10 + 3 + 5) / 3
