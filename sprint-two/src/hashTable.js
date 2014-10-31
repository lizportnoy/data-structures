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
  var temp = {};
  temp[key] = value;
  bucket.push(temp);
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var result = null;
  var bucket = this._storage.get(i);

  this._storage.each(function(bucketArray){
    if(bucketArray === bucket){
      return _.each(bucketArray, function(obj){
        return _.each(obj, function(val, key){
          if (key === k){
            result = val;
          }
        });
      });
    }
  });

  return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var target;

  this._storage.each(function(bucketArray) {
    if(bucketArray === bucket){
      _.each(bucketArray, function(obj, index, bucketArray) {

        _.each(obj, function(val, key, obj){
          if (key === k) {
            target = obj;
          }
        });

        if(bucketArray.indexOf(target) === index) {
          bucketArray.splice(index, 1);
        }

      });

    }
  });

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
