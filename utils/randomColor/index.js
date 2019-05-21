
// 十六进制表示法 + rgba表示法
var randomColor = function (type = 'eight') {
  function eight() {
    var colorArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let colorString = '';
    for (let i = 0; i < 6; i++) {
      colorString += colorArr[Math.floor(Math.random() * 15)];
    }
    return '#' + colorString;
  }
  function rgba() {
    return `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.random().toFixed(1)})`;
  }
  const handles = { eight, rgba };
  return handles[type]();
};

module.exports = randomColor;
