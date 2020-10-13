// 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
// leetcode 459
// 解题思路
// 为了避免这种无用的环绕，可以创建一个新的字符串str,它等于原来的字符串S再加上S自身，这样其实就包含了所有移动的字符串。

// 比如字符串：S = acd，那么str = S + S = acdacd

// acd移动的可能：dac、cda。其实都包含在了str中了。就像一个滑动窗口

// 一开始acd (acd) ，移动一次ac(dac)d,移动两次a(cda)cd。循环结束

// 所以可以直接判断str中去除首尾元素之后，是否包含自身元素。如果包含。则表明存在重复子串。

var repeatedSubstringPattern = function(s) {
  let s1 = (s + s).slice(1, -1);
  return s1.indexOf(s) != -1;
};