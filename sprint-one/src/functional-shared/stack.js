var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {storage: {}, counter: 0}
  _.extend(newStack,stackMethods);
  return newStack;

};

var stackMethods = {
  push: function (value) {
    this.storage[this.counter] = value;
    this.counter ++;
  },
  pop: function () {
    if(this.counter) {
      this.counter--;
      var firstOut = this.storage[this.counter];
      delete this.storage[this.counter];
      return firstOut;
    }
  },
  size: function () {
    return this.counter;
  }
};


