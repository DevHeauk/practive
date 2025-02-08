const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ");
const n_arr = input[1].split(" ").map(Number);

const preSum = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  preSum[i] = preSum[i - 1] + n_arr[i - 1];
}

for (let i = 2; i < input.length; i++) {
  const [start, end] = input[i].split(" ");
  console.log(preSum[end] - preSum[start - 1]);
}

