var expect = require('chai').expect;
var should = require('chai').should();

describe('A basic test', function() {
    it('should pass when everything is ok', function() {
        expect(true).to.be.true;
    })
})

var foo = require('../js/app.js').foo;
describe('foo', function() {
    it('should equal bar', function() {
        foo.should.equal('bar');
    })
})

var add = require('../js/app.js').add;
describe('add', function() {
    it('should return sum of two numbers', function() {
        var result = add(2,4);
        result.should.equal(6);
    })
})

var Person = require('../js/app.js').Person;
describe('person', function() {
    it('should return a name and age', function() {
        var nick = new Person('Nick', 29);
        nick.name.should.equal('Nick');
        nick.age.should.equal(29);
    })
})
