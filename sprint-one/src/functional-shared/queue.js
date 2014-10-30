var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {storage : {}, count:0};
  _.extend(queue, queueMethods);

  return queue;

};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.count] = value;
  this.count++;
}

queueMethods.dequeue = function() {
  if (this.count) {
    var firstOut = this.storage[0];
    delete this.storage[0];

    console.log(this.storage);
    _.each(this.storage, funct ion (val, key) {
      this.storage[+key -1] = val;
    });

    delete this.storage[this.count];
    this.count --;
    return firstOut;
  }
};

queueMethods.size = function() {
  return this.count;
};
