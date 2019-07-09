'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }

  shift() {
    // Remove an item from the start of the list and return it's value
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    --this.length;
    return returnValue;
  }

  unshift() {
    // Remove an item from the start of the list and return it's value

  }

  forEach() {
    // Remove an item from the start of the list and return it's value

  }

  map() {
    // Remove an item from the start of the list and return it's value

  }
  
  filter() {
    // Remove an item from the start of the list and return it's value

  }
  
  reduce() {
    // Remove an item from the start of the list and return it's value

  }
}

module.exports = List;
