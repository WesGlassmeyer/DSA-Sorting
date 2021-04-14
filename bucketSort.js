//6. Bucket Sort
const bucketArray = [4, 5, 3, 1, 9, 8, 6, 7, 2, 9, 9, 3];
const bSort = (max, min, arr) => {
  const range = max - min;
  let buckets = [];
  for (let i = 0; i <= range; i++) {
    buckets.push([]);
  }
  for (let j = 0; j < bucketArray.length; j++) {
    buckets[arr[j] - 1].push(arr[j]);
  }
  return buckets.reduce((acc, val) => acc.concat(val), []);
};
console.log(bSort(9, 1, bucketArray));
