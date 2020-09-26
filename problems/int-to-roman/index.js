/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var dParams =[parseInt(num / 1000),"M"];
  var cParams = [parseInt( num % 1000 / 100),'C',"D","M"];
  var bParams = [parseInt(num % 100/10),'X',"L","C"];
  var aParams = [num % 10,'I',"V","X"];
  
  function genRoman (num,oneStr,fiveStr, tenStr){
      if(!num){
          return "";
      }
      var res=[];
      if(num<4){
          res = new Array(num).fill(oneStr);
      } else if(num===4){
          res = [oneStr, fiveStr];
      } else if(num===5){
          res = [fiveStr];
      } else if (num<9){
          const more = num -5;
          const ones = new Array(more).fill(oneStr);
          res = [fiveStr].concat(ones);
      } else {
          res = [oneStr, tenStr];
      }
      return res.join('');
  }
  
  return genRoman(...dParams) + genRoman(...cParams) + genRoman(...bParams) + genRoman(...aParams);    
};