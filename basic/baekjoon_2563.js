const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const board = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  for (let r = y; r < y + 10; r++) {
    for (let c = x; c < x + 10; c++) {
      board[r][c] = 1;
    }
  }
}

let totalArea = 0;
for (let r = 0; r < 100; r++) {
  for (let c = 0; c < 100; c++) {
    if (board[r][c] === 1) totalArea++;
  }
}

console.log(totalArea);
