// 黄金比に近い A / B (整数) を出す

const golden = (1 + Math.sqrt(5)) / 2

const arr = []

for (let i = 1; i < 100; i++) {
  for (let j = 1; j < 100; j++) {
    arr.push({ i, j, golden: i / j, diff: golden - i / j })
  }
}

arr.sort((a, b) => Math.abs(a.diff) - Math.abs(b.diff))

console.log(arr.slice(0, 10))
