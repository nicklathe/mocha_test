// one way to export is like this:
var add = exports.add = function(num1, num2) {
    return (num1 + num2);
};

var Person = exports.Person = function(name, age) {
    this.name = name;
    this.age = age;
};

// or like this
exports.sayHello = function(name) {
    return 'Hello ' + name;
}

// another way is like this (declare the functions, then export them below):
var foo = 'bar';

function arrayLength (array) {
    return array.length;
}
module.exports.foo = foo;
module.exports.arrayLength = arrayLength;
