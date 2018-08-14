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

  const reduce = (numbers) => numbers.reduce((a, b) => a + b, 0);

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
    const expected = reduce(args);
    Kata.add(args.join(',')).should.equal(expected);
  });

  it('should accept newlines and commas as delimiters', function () {
    const args = '1\n2,3';
    Kata.add(args).should.equal(6);
  });

  it('should accept a delimiter definition', function () {
    const args = '//;\n1;2';
    Kata.add(args).should.equal(3);
  });

  it('should throw an error if negative numbers are input', function () {
    const args = '1,2,-3,-4,5';
    chai.expect(() => Kata.add(args)).to.throw(/^negatives not allowed: -3, -4$/);
  });

  it('should ignore numbers over 1000', function () {
    const args = '1000,1001,1002';
    Kata.add(args).should.equal(1000);
  });

  it('should accept delimiters with bracket notation', function () {
    const args = '//[***]\n1***2***3';
    Kata.add(args).should.equal(6);
  });

  it('should allow for multiple delimiters using bracket notation', function () {
    const args = '//[***][xxx]\n1***2xxx3';
    Kata.add(args).should.equal(6);
  });

  it('should allow for a single delimiter using bracket notation', function () {
    const args = '//[foobar]\n1foobar2foobar3';
    Kata.add(args).should.equal(6);
  });
});
