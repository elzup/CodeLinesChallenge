// 黄金比に近い A / B (整数) を出す

const golden = (1 + Math.sqrt(5)) / 2

const arr = []

let min = { i: 1, j: 1, golden: 1, diff: 1 }
for (let i = 1; i < 10000; i++) {
  for (let j = 1; j < 10000; j++) {
    const rate = i / j
    const diff = golden - rate
    if (Math.abs(diff) < Math.abs(min.diff)) {
      min = { i, j, golden: rate, diff }
    }
  }
}

// arr.sort((a, b) => Math.abs(a.diff) - Math.abs(b.diff))
// console.log(arr.slice(0, 10))

console.log(min)
