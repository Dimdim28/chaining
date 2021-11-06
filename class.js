"use strict";

class String {
  constructor(s) {
    this.value = s;
  }

  addAfter(a) {
    this.value += a;
    return this;
  }
  Length() {
    this.length = this.value.length;
    return this;
  }
  addBefore(b) {
    this.value = b + this.value;
    return this;
  }
  findindex(line) {
    this.index = this.value.indexOf(line);
    return this;
  }
  Replace(x, y) {
    this.value = this.value.replace(x, y);
    return this;
  }
}

const line = new String("Sergey")
  .addAfter(" Valeriyovich")
  .addBefore("antisemmit ")
  .Length()
  .findindex("anti");

console.dir(line);

line.Replace("gey","Gay");
console.dir(line);
