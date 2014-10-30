var makeQueue = function(){
  var someInstance = {};
  var count = 0;


  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count += 1;
  };

  someInstance.dequeue = function(){
    if (count) {
      var firstOut = storage[0];
      delete storage[0];

      _.each(storage, function (val, key) {
        storage[+key-1] = val;
      });

      delete storage[count];
      count --;
      return firstOut;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};

/* var someInstance = {};
  var count = 0;
  var oldest = 0;
  var newKey = 0;


  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[newKey] = value;
    newKey ++;
    count++;
  };

  someInstance.dequeue = function(){
    if (count > 0) {
      count--;
    }
    var firstOut = storage[oldest];
    delete storage[oldest];
    return firstOut;
    oldest++;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance; */
