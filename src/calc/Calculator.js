//   Calculator.js
export class Calculator {
  constructor(val1, val2, operation) {
    this.val1 = val1;
    this.val2 = val2;
    this.operation = operation;
  }
  count() {
    return this.operation(this.val1, this.val2);
  }
}
