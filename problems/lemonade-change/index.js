// 柠檬水找零  5，10，20三种面值，一瓶5元
var lemonadeChange = function (bills) {
  var five = 0;
  var ten = 0;
  for (let item of bills) {
    if (item === 5) five++;
    else if (item === 10) {
      five--;
      ten++;
    } else if (ten) {
      five--;
      ten--;
    } else {
      five -= 3;
    }
    if (five < 0) {
      return false;
    }
  }
  return true;
};

module.exports = lemonadeChange;
