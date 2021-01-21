exports.min = function min (array) {
  if(isEmptyArr(array)) return 0;

  var minElement = 0;
  array.forEach(element => {
    if(element < minElement) minElement = element;
  });
  return minElement;
}

exports.max = function max (array) {
  if(isEmptyArr(array)) return 0;

  var maxElement = 0;
  array.forEach(element => {
    if(element > maxElement) maxElement = element;
  });
  return maxElement;
}

exports.avg = function avg (array) {
  if(isEmptyArr(array)) return 0;

  var sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum / array.length;
}

function isEmptyArr(array){
  return typeof array != "undefined" && array != null && array.length > 0 ? false : true;
}