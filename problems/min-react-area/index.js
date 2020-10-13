// 939. 最小面积矩形
var minAreaRect = function(points) {
  let map = new Map();
  
  /*将每个点存入map*/
  points.forEach(ele=>{
      map.set(ele[0]+","+ele[1],true);
  });
  
  let len = points.length,
      area = Infinity;
  
  /*枚举每个点作为对角线*/
  for(let i = 0;i < len-1;i++){
      for(let j = i+1;j < len;j++){
          let leftup = points[i];
          let rightdown = points[j];
          /*判断两点是否在同一条线上*/
          if(leftup[0]!==rightdown[0] && leftup[1]!==rightdown[1]){
              /*判断点中是否存在另一条对角线的两点*/
              if(map.get(leftup[0]+","+rightdown[1]) && map.get(rightdown[0]+","+leftup[1])){
                  let cur = Math.abs(leftup[0]-rightdown[0]) * Math.abs(leftup[1]-rightdown[1]);
                  area = cur < area ? cur : area;
              }
          }
      }
  }
  if(area!=Infinity){
      return area;
  }else{
      return 0;
  }
};