var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  // if first node, no toNode
  this.storage.vertex = newNode;
  console.log(this.storage)
};

Graph.prototype.contains = function(node){
};

Graph.prototype.removeNode = function(node){
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
