function slasher(arr, howMany) {
  // it doesn't always pay to be first
  
  var tempar = [];
  var newArr = arr.slice();
   
  for (var i = 0; i < newArr.length; i += howMany ) {
    if (arr[i] !== "") {
      tempar.push(arr.splice(0, howMany));
    }
    
  }
  return tempar;
}

slasher([1, 2, 3], 2);