// 2桁 / 2桁 で一番円周率に近い組み合わせを求める

const pi = Math.PI

// a / b
const res: { a: number; b: number; absDiff: number; num: number }[] = []

for (let a = 1; a < 100; a++) {
  for (let b = 1; b < 100; b++) {
    const num = a / b
    const absDiff = Math.abs(num - pi)
    res.push({ a, b, absDiff, num })
  }
}
res.sort((a, b) => a.absDiff - b.absDiff)

console.log(res.splice(0, 10))
