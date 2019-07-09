# LAB - 02

## Classes, Inheritance, Functional Programming

### Author: Joseph Hangarter

### Links and Resources
* [submission PR](http://xyz.com)
* [travis](http://xyz.com)

### Modules
#### `list.js` - class List with methods constructing array methods without using array methods
#### `list.constructor.js` - function List with prototype functions to construct array methods without using array methods
#### `list.test.js` - tests for `list.js` &  `list.constructor.js`
#### `index.js` - list-constructor.js required in for instantiated List 
#### `vehicle-class.js` - class Vehicle with drive & stop method with classes car & motorcylce that extends from Vehicle
#### `vehicle-constructor.js - acts the same as `vehicle-class.js` but utilizes contructors instead of class
#### `vehicle-test.js` - test for `vehicle-constructor.js`

##### Exported Values and Methods
Make array methods without using array methods
`push()` - Add item to the end of the list
`pop()` - Remove an item from the end of the list and return it's value
`shift()` - Remove an item from the start of the list and return it's value
`unshift()` - Add item to the start of the list
`forEach()` - Iterates through every element in array
`map()` - Creates a new array with the results of calling a provided function on every element in the calling array
`filter()` - Creates a new array with all elements that pass the test implemented by the provided function
`reduce()` - Method executes a reducer function (that you provide) on each element of the array, resulting in a single output value
`stuff` - instantiated List for `list-constructor.js`
`drive()` - returns 'Moving Forward'
`stop()` - returns 'Stopping'
`wheelie()` - returns 'Wheee!'

#### Running the app
* `npm start`
* `npm run lint`
* `node (module.js)`
  
#### Tests
* `npm test` to run tests
* What assertions were made?
* What assertions need to be / should be made?