function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(sumOfArray([5, 3, 2, 1, 7]));
