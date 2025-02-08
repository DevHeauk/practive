const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const chart = new Array(N + 1).fill(new Array(N + 1).fill(0));

// 아직 안풀렸다....
for (let y = 1; y < N + 1; y++) {
  const arr = input[y].split(" ").map(Number);
  console.log(arr);
  for (let x = 1; x < N + 1; x++) {
    chart[y][x] = arr[x - 1];
    console.log(chart);
  }
}

console.log(chart);
const prefixSum = new Array(N + 1).fill(new Array(N + 1).fill(0));

for (let x = 1; x < N + 1; x++) {
  for (let y = 1; y < N + 1; y++) {
    prefixSum[y][x] =
      chart[y][x] + prefixSum[x - 1][y - 1] + prefixSum[x][y - 1] + prefixSum[x - 1][y];
  }
}

for (let i = N + 1; i < N + M + 1; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  console.log(
    prefixSum[x2][y2] - prefixSum[x1 - 1][y1 - 1] - prefixSum[x2][y1 - 1] - prefixSum[x1 - 1][y2],
  );
}
