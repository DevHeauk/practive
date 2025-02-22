const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const start = "a".charCodeAt();
const end = "z".charCodeAt();

const charObj = {};
[...input[0]].forEach(
  (v, i) =>
    (charObj[v.charCodeAt()] =
      typeof charObj[v.charCodeAt()] === "number" ? charObj[v.charCodeAt()] : i),
);

const result = [];
for (let i = start; i <= end; i++) {
  result.push(typeof charObj[i] === "number" ? charObj[i] : -1);
}

console.log(result.join(" "));
