const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map((row) => row.split(""));

function countRepaints(x, y, startColor) {
  let repaint = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let expectedColor = (i + j) % 2 === 0 ? startColor : startColor === "W" ? "B" : "W";
      if (board[x + i][y + j] !== expectedColor) repaint++;
    }
  }

  return repaint;
}

let minRepaints = Infinity;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    const repaintW = countRepaints(i, j, "W");
    const repaintB = countRepaints(i, j, "B");
    minRepaints = Math.min(minRepaints, repaintW, repaintB);
  }
}

console.log(minRepaints);
