var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  var node = this.makeNode(newNode);
  this.storagep[newNode] = [];
  // if graph is empty
  if(!this.head){
    this.head = node;
    this.nodeCount++;
  }

  else if(this.nodeCount === 1) {
    this.head.edges = [node];
    this.nodeCount++;
  }

  else {
    // find node to pull up right object
    var to = this.findNode(toNode);
    // add tonode to edgesArray of newNode
    to.edges.push(node)
    console.log(to);
    this.nodeCount++;
  }
};

Graph.prototype.contains = function(node){
  return this.findNode(node) ? true : false;
};

Graph.prototype.removeNode = function(node){
  // find node
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var from = this.findNode(fromNode);
  var to = this.findNode(toNode);
  if (from.edges && from.edges.indexOf(to) !== -1) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var from = this.findNode(fromNode);
  var to = this.findNode(toNode);
  from.edges.push(to);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.makeNode = function(newNode){
  var node = {};
  node.value = newNode;
  node.edges = null;
  return node;
};

Graph.prototype.findNode = function(target, currentNode, searched, result){
  currentNode = currentNode || this.head;
  searched = searched || [];
  result = result || false;
  searched.push(currentNode.value);

  if (currentNode.value === target) {
    result = currentNode;
  } else if (currentNode.edges) {
    _.each(currentNode.edges, function (edgeNodeObj) {
      if(searched.indexOf(edgeNodeObj.value) === -1) {
        result = Graph.prototype.findNode(target, edgeNodeObj, searched, result);
      }
    });
  }

  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
