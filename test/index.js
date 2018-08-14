const Kata = require('../index')

const chai = require('chai');
const should = chai.should();

describe('add', function () {
  it('should add an empty string', function () {
    Kata.add('').should.equal(0);
  });

  it('should add one number', function () {
    Kata.add('1').should.equal(1);
  });

  it('should add two numbers', function () {
    Kata.add('1,2').should.equal(3);
  });
});
