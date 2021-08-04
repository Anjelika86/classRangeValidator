"use strict";

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  set from(newFrom) {
    if (isNaN(newFrom) || typeof newFrom !== "number") {
      throw new TypeError("Age must be number");
    }

    this._from = newFrom;
  }
  get from() {
    return this._from;
  }
  set to(newTo) {
    if (isNaN(newTo) || typeof newTo !== "number") {
      throw new TypeError("Age must be number");
    }
    if (to === i) {
      throw new RangeError(`From can't be more to`);
    }
    this._to = newTo;
  }
  get to() {
    return this._to;
  }
  getterRrange() {
    const arrRange = [];
    for (let i = this.from; i <= this.to; i++) {
      arrRange.push(i);
    }
    return arrRange;
  }
}
const range = new RangeValidator(0, 10);
