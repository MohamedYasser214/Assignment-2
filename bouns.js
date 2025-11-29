// Q1
function findKthMissing(arr, k) {
  let missingCount = 0;
  let current = 1;
  while (true) {
    if (!arr.includes(current)) {
      missingCount++;
      if (missingCount === k) {
        return current;
      }
    }
    current++;
  }
}
const arr = [2, 3, 4, 7, 11];
const k = 5;
console.log(findKthMissing(arr, k));
