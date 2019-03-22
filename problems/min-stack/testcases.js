module.exports = [
  {
    input: [['push', 'push', 'pop', 'push', 'getTop', 'getMin'], [1, 3, null, -1, null, null]],
    output: [[1], [1, 3], 3, [1, -1], -1, -1]
  }
];
