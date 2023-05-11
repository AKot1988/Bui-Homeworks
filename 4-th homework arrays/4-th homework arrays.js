exampleArray = [3, 4, 5, 7, 9, 10, 11, 12];
let arr1 = [1, 3, 5, 7, 9, 11, 12];
let arr2 = [1, 2, 3, 4, 5, 10, 12];

// ## TASK-01
const fill = (arraySize, value) => {
  let newArray = [];
  newArray.length = arraySize;
  newArray.fill(value);
  return newArray;
};

console.log(fill(15, 21));

// ## TASK-02
const reverseArray = (array) => {
  let reversedArray = [];
  array.map((el) => reversedArray.unshift(el));
  return reversedArray;
};
console.log(reverseArray(exampleArray));

// ## TASK-03
const mergeArrays = (firstArray, secondArray) => {
  mergedUnfilteredArray = firstArray.concat(secondArray);
  debugger;
  mergedFilteredArray = mergedUnfilteredArray.filter(
    (el, id) => mergedUnfilteredArray.indexOf(el) === id
  );
  mergedFilteredArray.sort((a, b) => a - b);
  return mergedFilteredArray;
};
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));
