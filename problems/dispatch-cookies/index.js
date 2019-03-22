// 分发饼干
var dispatchCookies = function (g, s) {
  var gsort = g.sort(function (a, b) { return a - b; });
  var ssort = s.sort(function (a, b) { return a - b; });

  var gi = 0;
  var si = 0;
  var res = 0;
  while (gi < gsort.length && si < ssort.length) {
    if (g[gi] <= s[si]) {
      gi++;
      si++;
      res++;
    } else {
      si++;
    }
  }
  return res;
};

module.exports = dispatchCookies;
