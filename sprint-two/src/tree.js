var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  // check if an array exists at children
  if (!this.children) {
    this.children = [];
  }
  var child = makeTree(value);
  this.children.push(child);
  // add value to array in format of object {value: val, children : undefined}

  function recursiveSubroutine(child) {

  }

  recursiveSubroutine(node);

};

treeMethods.contains = function(target){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
