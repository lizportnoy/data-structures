var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var linkedListNode = makeNode(value);
    if(!list.head){
      list.head = linkedListNode;
    }
    if (list.tail) {
      list.tail.next = linkedListNode;
    }

    list.tail = linkedListNode;

  };

  list.removeHead = function(){
    var nextHead = list.head.next;
    var temp = list.head.value;
    list.head = nextHead;
    return temp;

  };

  list.contains = function(target, currentNode){
    var node = currentNode || list.head;
    if(node.value === target) {
      return true;
    } else {
      if(node.next) {
        node = node.next;
        return list.contains(target, node);
      } else {
        return false;
      }
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
