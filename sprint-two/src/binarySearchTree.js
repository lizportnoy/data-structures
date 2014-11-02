var headNode = false;

var makeBinarySearchTree = function(value){
  var newBinarySearchTree = {};
  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;

  _.extend(newBinarySearchTree, treeMethods);

  if (!headNode) {
    headNode = newBinarySearchTree;
  }
  return newBinarySearchTree;
};

var treeMethods = {
  insert: function(value, parentNode, node){
    node = node || makeBinarySearchTree(value);
    parentNode = parentNode || headNode;

    if (value < parentNode.value) {
      if (!parentNode.left) {
        parentNode.left = node;
      } else {
        parentNode = parentNode.left;
        this.insert(value, parentNode, node);
      }
    } else if (value > parentNode.value) {
      if (!parentNode.right) {
        parentNode.right = node;
      } else {
        parentNode = parentNode.right;
        this.insert(value, parentNode, node);
        console.log(this.right.left.value);
      }
    }

  },

  contains: function(){
  },

  depthFirstLog: function(){
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
