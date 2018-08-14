const Kata = require('../index')

const chai = require('chai');
const should = chai.should();

describe('add', function () {
  it('should add an empty string', function () {
    Kata.add('').should.equal(0);
  });
});
