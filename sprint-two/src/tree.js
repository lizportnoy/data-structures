var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  if (!this.children) {
    this.children = [];
  }
  var child = makeTree(value);
  this.children.push(child);
};

treeMethods.contains = function(target, node, result){

  // node = node || this;
  // var result = result || false;

  // if(node.value === target) {
  //   return true;
  // } else {
  //   if (node.children) {
  //     _.each(node.children, function(childObj) {
  //       result = childObj.contains(target, childObj, result);
  //     });
  //   }
  // }

  // return result;
  if (this.value === target){
    return true;
  } else {
    return this.children ? _.some(this.children, function(child){
      return child.contains(target);
    }) : false;
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
