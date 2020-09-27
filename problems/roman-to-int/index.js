/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var hash ={ I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
  var len = s.length;
  var res =0;
  var p = 0;
  for(var i =len-1;i>=0;i--){
    if(hash[s[i]]>=p){
      res = res + hash[s[i]]; 
    } else{
        res = res -hash[s[i]];
    }
    p = hash[s[i]];
  }
    return res;
};