var expect = require('chai').expect;
var should = require('chai').should();

var foo = require('../js/app.js').foo;
describe('foo', function() {
    //using should
    it('should equal bar', function() {
        foo.should.equal('bar');
    })
    //using expect
    it('should be a string', function() {
        expect('foo').to.be.a('string');
    })
    it('should return length of foo', function() {
        expect('foo').to.have.length(3);
    })
})

var add = require('../js/app.js').add;
describe('add', function() {
    it('should return sum of two numbers', function() {
        //using should
        var result = add(2,4);
        result.should.equal(6);
    })
})

var Person = require('../js/app.js').Person;
describe('person', function() {
    it('should return a name and age', function() {
        //using should
        var nick = new Person('Nick', 29);
        nick.name.should.equal('Nick');
        nick.age.should.equal(29);
    })
})

var arrayLength = require('../js/app.js').arrayLength;
describe('arrayLength', function() {
    it('should return the length of an array', function() {
        //using expect
        var testArray = arrayLength([1,2,3,4]);
        expect(testArray).to.equal(4);
    })
})

// you can also bring them in this way, instead of tagging the function on the end of the require statement.
// this would allow you to require app.js once at the top, and just do app.functionName. Probably a better way to do it.

var app = require('../js/app.js');
describe('sayHello', function() {
    it('should say hello to a name given it', function() {
        expect(app.sayHello('Nick')).to.equal('Hello Nick');
    })
    it('should be a string', function() {
        expect(app.sayHello('Fred')).to.be.a('string');
    })
})
