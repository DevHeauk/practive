const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const nums = input[0]
  .split(" ")
  .map((str) => reverseString(str))
  .map(Number);

console.log(Math.max(...nums));

function reverseString(str) {
  let result = [...str];
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    [result[start], result[end]] = [result[end], result[start]];
    start++;
    end--;
  }

  return result.join("");
}

// 더 간단한 풀이
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const nums = input[0]
//   .split(" ")
//   .map((str) => str.split("").reverse().join(""))
//   .map(Number);

// console.log(Math.max(...nums));
