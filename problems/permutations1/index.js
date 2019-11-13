// 全排列
// https://leetcode-cn.com/problems/permutations/submissions/

const permute = (nums) =>{
  let result = [];
  const permutations = (current, remaining) =>{
    if(remaining.length === 0){
      result.push(current);
    } else {
      for(let i = 0; i < remaining.length; i++){
        current.push(remaining[i]);
        permutations(current.slice(), remaining.slice(0,i).concat(remaining.slice(i+1)));
        current.pop();
      }
    }
  }
  permutations([],nums)
  return result;
}
module.exports =  permute;
