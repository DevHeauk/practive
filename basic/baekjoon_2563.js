const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const positions = [];
for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  positions.push([x, y]);
}

let overlapSum = 0;
for (let i = 0; i < N; i++) {
  const [x1, y1] = positions[i];
  for (let j = i + 1; j < N; j++) {
    const [x2, y2] = positions[j];

    const overlapX = Math.min(x1 + 10, x2 + 10) - Math.max(x1, x2);
    const overlapY = Math.min(y1 + 10, y2 + 10) - Math.max(y1, y2);

    if (overlapX > 0 && overlapY > 0) {
      overlapSum += overlapX * overlapY;
    }
  }
}

const totalArea = 100 * N - overlapSum;
console.log(totalArea);
