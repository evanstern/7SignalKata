const Kata = require('../index')

const chai = require('chai');
const should = chai.should();

describe('add', function () {
  const createArguments = (max) => {
    const args = [];
    const numArgs = Math.floor(Math.random() * max) + 1;
    for (i = 0; i < numArgs; i++) {
      args.push(Math.floor(Math.random() * 10));
    }
    return args;
  };

  it('should add an empty string', function () {
    Kata.add('').should.equal(0);
  });

  it('should add one number', function () {
    Kata.add('1').should.equal(1);
  });

  it('should add two numbers', function () {
    Kata.add('1,2').should.equal(3);
  });

  it('should add an arbitrary number of arguments', function () {
    const numArgs = 2 + Math.ceil(Math.random() * 10);
    const args = createArguments(numArgs);
    const expected = args.reduce((a, b) => a + b, 0);
    Kata.add(args.join(',')).should.equal(expected);
  });
});
