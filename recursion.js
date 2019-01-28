var arr = [8, 4, 6, 44, 25, 19];

function recursiveAdd(arr) {
  if(arr.length == 0) {
    return 0;
  } else {
    return arr.pop() + recursiveAdd(arr)
  }
}

// console.log(recursiveAdd(arr));


function recursiveCount(arr) {
  if(arr.length == 0) {
    return 0;
  } else {
    arr.pop();
    return 1 + recursiveCount(arr)
  }
}

// console.log(recursiveCount(arr));

function recursiveMax(arr) {
  if(arr.length == 1) {
    return arr[0];
  } else {
    let last = arr[arr.length - 1]
    let secondLast = arr[arr.length - 2]
    if(last > secondLast) {
      arr.splice(arr.length - 2, 1)
    } else {
      arr.pop();
    }
    return recursiveMax(arr);
  }
}

console.log(recursiveMax(arr));
