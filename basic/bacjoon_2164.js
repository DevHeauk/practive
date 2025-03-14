const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

class Deque {
  constructor() {
    this.items = [];
    this.head = 0;
    this.tail = 0;
  }

  push(value) {
    this.items[this.tail++] = value;
  }

  shift() {
    // 실제로 없애는게 아니라 값만 리턴, 포인터 이동.
    return this.items[this.head++];
  }

  size() {
    return this.tail - this.head;
  }

  front() {
    return this.items[this.head];
  }
}

const queue = new Deque();

for (let i = 1; i <= N; i++) {
  queue.push(i);
}

while (queue.size() > 1) {
  queue.shift();
  queue.push(queue.shift());
}

console.log(queue.front());
