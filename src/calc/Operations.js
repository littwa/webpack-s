//Operations.js;
export class Operations {
  constructor() {}
  static get PLUS() {
    return function(a, b) {
      return a + b;
    };
  }
  static get MINUS() {
    return function(a, b) {
      return a - b;
    };
  }
  static get MULTY() {
    return function(a, b) {
      return a * b;
    };
  }
  static get DEL() {
    return function(a, b) {
      return a / b;
    };
  }
}
