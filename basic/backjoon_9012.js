const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N] = input[0].split(" ").map(Number);

function isVPS(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(i);
    } else if (str[i] === ")") {
      if (stack.length === 0) {
        return false;
      }

      stack.pop();
    } else {
      throw new Error("unexpected string");
    }
  }

  return stack.length === 0;
}

for (let i = 1; i <= N; i++) {
  console.log(isVPS(input[i]) ? "YES" : "NO");
}
