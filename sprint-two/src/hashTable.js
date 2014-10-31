var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  if(!this._storage.get(i)){
    this._storage.set(i, []);
  }
  var bucket = this._storage.get(i);
  bucket.push([key, value]);
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);
  var result = null;

  _.each(bucket, function(item, ind){
    if (item[0] === k) {
      result = item[1];
    }
  });

  return result;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var size = bucket.length;

  _.each(bucket, function (item, index) {
    if (item[0] === k) {
      bucket.splice(index, 1);
    }
  });

  if(size > 1) {
    this._storage.set(i, bucket);
  } else {
    this._storage.set(i)
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
