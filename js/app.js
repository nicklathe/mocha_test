// one way to export is like this:
var add = exports.add = function(num1, num2) {
    return (num1 + num2);
};

var Person = exports.Person = function(name, age) {
    this.name = name;
    this.age = age;
};

//another way is like this:
var foo = 'bar';

function arrayLength (array) {
    return array.length;
}

// functions and variables exported here:
module.exports.foo = foo;
module.exports.arrayLength = arrayLength;
