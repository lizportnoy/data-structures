var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {storage : {}, firstInQueue: 0, lastInQueue: 0};
  _.extend(queue, queueMethods);

  return queue;

};

var queueMethods = {

  enqueue : function (value) {
    this.storage[this.lastInQueue] = value;
    this.lastInQueue++;
  },

  dequeue : function() {
      var firstOut = this.storage[this.firstInQueue];
      delete this.storage[this.firstInQueue];
      this.firstInQueue++;
      return firstOut;
    },

  size : function() {
    return Object.keys(this.storage).length;
  }
};
