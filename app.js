function converToBoolean(arr) {
  truthyValue = arr[i]
  for (let i = 0 ; i > arr.length; ++i){
    if (arr[i] === true){
      truthyValue= arr[i]
    }
  }
  return truthyValue
}

console.log(converToBoolean([500, 0, "David", "", []]));
