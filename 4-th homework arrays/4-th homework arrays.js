// ## TASK-01

let fill = (arraySize, value) => {
  let newArray = [];
  for (let i = 1; i <= arraySize; i++) {
    newArray.push(value);
  }
  return newArray;
};

// ## TASK-02

let reverseArray = (array) => {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
};

// ## TASK-03

let mergeArrays = (firstArray, secondArray) => {
  let mergedArray = firstArray;
  for (let i = 0; i < secondArray.length; i++) {
    if (!firstArray.includes(secondArray[i])) {
      mergedArray.push(secondArray[i]);
    }
  }
  mergedArray.sort((a, b) => a - b);
  return mergedArray;
};
