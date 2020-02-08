// 邻接表 表示法
// A: B C D
// B: A
// C: A
// D: A

// 字典类
function Dictionary (){
  var items = {};
  this.set = function(key, value){
    items[key] =  value;
  }
  this.has = function(key){
    return key in items;
  }
  this.get = function(key){
    return this.has(key) ? items[key] : undefined;
  }
}

function Graph(){
  var vertices = []; // 存储顶点
  var adjList = new Dictionary();

 //创建initializeColor用来初始化各个顶点的颜色，为遍历过程中的标记做准备
  var initializeColor = function(){
      var color = {};
      for (var i=0; i<vertices.length; i++){
          color[vertices[i]] = 'white';
      }
      return color;
  }

  // 添加顶点
  this.addVertex = function(v){
    vertices.push(v);
    adjList.set(v,[]);
  }

  // 添加边
  this.addEdge =  function(v,w){
    adjList.get(v).push(w);
    adjList.get(w).push(v);
 }

 this.toString = function() {
    var s = '';
    for(var i=0; i<vertices.length; i++){
        s += vertices[i] + '->';
        var neighbors = adjList.get(vertices[i]);
        for(var j=0; j<neighbors.length; j++){
            s += neighbors[j] + ' ';
        }
        s += '\n';
    }
    return s;
 }

 // 广度优先遍历
 // 采用队列的方式，先添加节点的先被探索；
// 采用三种颜色来反应节点的状态：
// 白色：还没被访问；
// 灰色：被访问但未被探索；
// 黑色：被访问且探索过；
 this.bfs = function(v, callback){
   var color = initializeColor();
   var queue = [];
   queue.push(v);

   while(queue.length > 0) {
     var cur = queue.shift();
     var neibors = adjList.get(cur);
     color[cur] = 'grey';
     for(let i=0; i<neibors.length; i++) {
      var w = neibors[i];
      if(color[w] === 'white') {
        color[w] === 'grey';
        queue.push(w);
      }
     }
     color[cur] = 'black';
     if(callback) {
       callback(cur);
     }
   }
 }

 // BFS寻找最短路径
 this.findPath = function(v) {
  var color = initializeColor();
  var queue = [];
  queue.push(v);


  var d = [];
  var pred = [];

  for(var i=0; i<vertices.length; i++){
    d[vertices[i]] = 0;        //初始化
    pred[vertices[i]] = null;
  }
  while(queue.length > 0){
    var cur = queue.shift();
    var neibors = adjList.get(cur);
    color[cur] = 'grey';
    for(let i=0; i<neibors.length; i++){
     var w = neibors[i];
     if(color[w] === 'white'){
       color[w] === 'grey';
       d[w] = d[cur] + 1;
       pred[w] = cur;
       queue.push(w);
     }
    }
    color[cur] = 'black';
  }
  return{
    distance:d,
    predecessers:pred
  }
}

}


//创建实例
var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I'];
//添加顶点
for(var i=0; i<myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}

//逐一加入边
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('C','G');
graph.addEdge('C','D');
graph.addEdge('D','G');
graph.addEdge('D','H');
graph.addEdge('B','E');
graph.addEdge('B','F');
graph.addEdge('E','I');
console.log(graph.toString());

function printNode(value){
  console.log('Visited vertex:'+value);
}
graph.bfs(myVertices[0],printNode);


//BFS实例
var shortestPathA = graph.findPath(myVertices[0]);//需要输入头节点myVertices[0]
console.log(shortestPathA);

// 搜索路径BFS
var fromVertex = myVertices[0];
for (var i=1; i<myVertices.length; i++){
    var toVertex = myVertices[i];
    var path = [];    //path用来储存路径
    for (var v=toVertex; v!==fromVertex; v=shortestPathA.predecessers[v]){
        path.push(v);
    }
    path.push(fromVertex);
    var s = path.pop();
    while(!path.length==0){
        s += '-' + path.pop();
    }
    console.log(s)
}

