var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.firstKey = 0;
  this.lastKey = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.lastKey] = value;
  this.lastKey++;
};

Queue.prototype.dequeue = function () {
  var firstOut = this.storage[this.firstKey];
  delete this.storage[this.firstKey];
  this.firstKey++;
  return firstOut;
}

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
}
