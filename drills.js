function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

// console.log(
//   mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40])
// );

//  1. Understanding merge sort
// 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
// What is the resulting list that will be sorted after 3 recursive calls to mergeSort?
// 1st   21, 1, 26, 45, 29, 28, 2, 9
// 2nd   21, 1, 26, 45
// 3rd   21, 1

// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// 4th   21
// 5th   1              1  [1 21]
// 6th   26, 45
// 7th   26
// 8th   45             2  [26 45]      3  [1 21 26 45]
// 9th   29, 28, 2, 9
// 10th  29, 28
// 11th  29
// 12th  28             4  [28 29]
// 13th  2, 9
// 14th  2
// 15th  9              5  [2 9]        6  [1 21 26 45]     7  [1 2 9 21 26 28 29 45]
// 16th  16, 49, 39, 27, 43, 34, 46, 40

// What are the first 2 lists to be merged?
// [21], [1] = [1 21]

// Which two lists would be merged on the 7th merge?
// [1 21 26 45], [1 21 26 45] =  [1 2 9 21 26 28 29 45]

// 2.1 Understanding quicksort

// - The pivot could have been either 14 or 17, because it currently sorted all items:
// left = less than 14 and right = greater than 14. Also, it sorted all items for 17 as well.
// left = less than 17 and right = greater than 17.

// 2.2
// When using the last item on the list as a pivot

// Partition #1: (Pivot = 12) [10, 3, 9, 12, 14, 17, 13, 15, 19, 16]
// Partition #2: (Left-side, pivot = 9) [3, 9, 10, 12, 14, 17, 13, 15, 19, 16]

// When using the first item on the list as a pivot

// Partition #1: (pivot = 14) [13, 10, 3, 9, 12, 14, 17, 15, 19, 16]
// Partition #2: (Left-side, pivot = 13) [10, 3, 9, 12, 13, 14, 17, 15, 19, 16]
