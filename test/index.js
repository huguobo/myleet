/* eslint global-require:0 */
var assert = require('assert');
var glob = require('glob');
var path = require('path');

var problems = glob.sync(path.resolve(__dirname, '../problems/*'));

problems.forEach(function (dirPath, index) {
  console.log(dirPath);
  var dirName = path.relative(path.resolve(dirPath, '..'), dirPath);
  var testcasesPath = path.join(dirPath, 'testcases.js');
  var programPath = path.join(dirPath, 'index.js');
  var program = require(programPath);
  var testcases = require(testcasesPath);
  describe(dirName, function () {
    it(dirName + ' testcases should passed', function () {
      testcases.forEach(function (testcase) {
        assert.deepStrictEqual(program(...testcase.input), testcase.output);
      });
    });
  });
});
