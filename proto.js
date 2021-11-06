"use strict";

const Number = function (s) {
  this.value = s;
};
Number.prototype.twice = function () {
  this.value *= 2;
  return this;
};
Number.prototype.cube = function () {
  this.value *= this.value * this.value;
  return this;
};
Number.prototype.result = function () {
  return this.value;
};

const num = new Number(8).cube().twice();

console.log(num.result());