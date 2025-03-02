const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const start = "A".charCodeAt();
const end = "Z".charCodeAt();
const charList = [];

for (let i = start; i <= end; i++) {
  charList.push(i);
}
const charNumObj = Object.fromEntries([
  ...charList.splice(0, 3).map((v) => [v, 2 + 1]),
  ...charList.splice(0, 3).map((v) => [v, 3 + 1]),
  ...charList.splice(0, 3).map((v) => [v, 4 + 1]),
  ...charList.splice(0, 3).map((v) => [v, 5 + 1]),
  ...charList.splice(0, 3).map((v) => [v, 6 + 1]),
  ...charList.splice(0, 4).map((v) => [v, 7 + 1]),
  ...charList.splice(0, 3).map((v) => [v, 8 + 1]),
  ...charList.map((v) => [v, 9 + 1]),
]);

console.log([...input[0]].reduce((acc, cur) => acc + charNumObj[cur.charCodeAt()], 0));

// 더 간단한 풀이
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const result = [...input[0]].reduce((acc, char) => {
//   const code = char.charCodeAt() - "A".charCodeAt(); // A를 0으로 기준
//   if (code < 15) return acc + Math.floor(code / 3) + 3; // ABC(3) ~ MNO(7)
//   if (code < 19) return acc + 8; // PQRS
//   if (code < 22) return acc + 9; // TUV
//   return acc + 10; // WXYZ
// }, 0);

// console.log(result);
