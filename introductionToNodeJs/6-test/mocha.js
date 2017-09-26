// Run via the command line as "./node_modules/mocha/bin/mocha mocha.js"

var should = require('should');
var math = require('./math');

describe('Math', function () {
  describe('when used synchronously', function () {
    it('should double even numbers correctly', function () {
      math.evenDoublerSync(2).should.equal(4);
    });

    it('should throw on odd numbers', function (done) {
      (function () {
        math.evenDoublerSync(3)
      }).should.throw(/Odd/);
      done();
    });
  });

  describe('when used asynchronously', function () {
    it('should double even numbers correctly', function (done) {
      math.evenDoubler(2, function (err, results) {
        should.not.exist(err);
        results.should.equal(4);
        done();
      });
    });

    it('should return error on odd numbers', function (done) {
      math.evenDoubler(3, function (err, results) {
        should.exist(err);
        should.not.exist(results);
        done();
      });
    });
  });
});
