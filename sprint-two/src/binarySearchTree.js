
var makeBinarySearchTree = function(value){
  var newBinarySearchTree = Object.create(treeMethods);
  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;

  return newBinarySearchTree;
};

  var treeMethods = {
  insert: function(value){

    var node = makeBinarySearchTree(value);

    if (value < this.value) {
      if (!this.left) {
        this.left = node;
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (!this.right) {
        this.right = node;
      } else {
        this.right.insert(value);
      }
    }

  },

  contains: function(value, result){
    result = result || false
    if (value === this.value) {
      result = true;
    } else {
      if (this.left) {
        result = this.left.contains(value); 
      }
      if (this.right) {
        result = this.right.contains(value);
      }
    }
    return result;
  },

  depthFirstLog: function(func){
    func(this.value);
    if (this.left) {
      this.left.depthFirstLog(func);
    }
    if (this.right) {
      this.right.depthFirstLog(func);
    }
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
