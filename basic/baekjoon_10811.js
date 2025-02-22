const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let arr = Array(N)
  .fill(0)
  .map((_n, i) => i + 1);

for (let i = 1; i <= M; i++) {
  const [idx1, idx2] = input[i].split(" ").map((v) => Number(v) - 1);
  const before = arr.splice(0, idx1);
  const reversed = reverseArray(arr.splice(0, idx2 - idx1 + 1));

  arr = [...before, ...reversed, ...arr];
}

function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(arr);
