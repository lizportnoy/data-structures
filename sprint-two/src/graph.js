var Graph = function(){
  this.storage = {};
  this.first = null;
};

Graph.prototype.addNode = function(newNode, toNode){

  if(Object.keys(this.storage).length === 0){
    this.storage[newNode] = [];
    this.first = newNode;
  }

  else if(Object.keys(this.storage).length === 1) {
    this.storage[newNode] = [this.first];
    this.storage[this.first] = [newNode];
  }

  else {
    this.storage[newNode] = [toNode];
    this.storage[toNode].push(newNode);
  }

};

Graph.prototype.contains = function(node){
  if (this.storage[node] === undefined) {
    return false;
  } else {
    return true;
  }
};

Graph.prototype.removeNode = function(node){
  _.each(this.storage[node], function(edgeValue){
    this.removeEdge(node, edgeValue);
  });
  delete this.storage[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this.storage[fromNode].indexOf(toNode) !== -1;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var ind1 = this.storage[fromNode].indexOf(toNode);
  this.storage[fromNode].splice(ind1, 1);

  var ind2 = this.storage[toNode].indexOf(fromNode);
  this.storage[toNode].splice(ind2, 1);

  if (this.storage[fromNode].length === 0) {
    delete this.storage[fromNode];
  }

  if (this.storage[toNode].length === 0) {
    delete this.storage[toNode];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
