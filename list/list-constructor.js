'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

List.prototype.shift = function() {
  // Remove an item from the start of the list and return it's value
  let returnValue = this.data[this.length[0]];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

List.prototype.unshift = function(item) {
  //Add item to the start of the list
  this.data[this.length[0]] = item;
  this.length++;
};

List.prototype.forEach = function() {
  //Iterates through every element in array
};

List.prototype.map = function() {
  //Creates a new array with the results of calling a provided function on every element in the calling array
};

List.prototype.filter = function() {
  //Creates a new array with all elements that pass the test implemented by the provided function
};

List.prototype.reduce = function() {
  //Method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
};

module.exports = List;
