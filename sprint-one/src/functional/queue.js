var makeQueue = function(){
  var someInstance = {};
  var firstInQueue = 0;
  var lastInQueue = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[lastInQueue] = value;
    lastInQueue++;
  };

  someInstance.dequeue = function(){
    var firstOut = storage[firstInQueue];
    delete storage[firstInQueue];
    firstInQueue++;
    return firstOut;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
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
