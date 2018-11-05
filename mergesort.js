function split(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const midpoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);
  return [left, right];
}

function merge(arr1, arr2) {
  let mergedArr = [];

  let arr1Elem = arr1.shift();
  let arr2Elem = arr2.shift();

  while (arr1Elem && arr2Elem) {
    if (arr1Elem < arr2Elem) {
      mergedArr.push(arr1Elem);
      arr1Elem = arr1.shift();
    } else {
      mergedArr.push(arr2Elem);
      arr2Elem = arr2.shift();
    }
  }

  if (arr1Elem) {
    mergedArr = [...mergedArr, arr1Elem, ...arr1];
  } else if (arr2Elem) {
    mergedArr = [...mergedArr, arr2Elem, ...arr2];
  }

  return mergedArr;
}

function mergesort(arr) {
  if (arr.length <= 1) return arr;

  const [left, right] = split(arr);
  return merge(mergesort(left), mergesort(right));
}
