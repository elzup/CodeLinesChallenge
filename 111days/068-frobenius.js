// フロベニウスの硬貨交換問題
// 例 11x + 12y + 13z で表現できない最大の数

const a = 11
const b = 12
const c = 13

const f2 = (x, y) => x * y - (x + y)

const ab = f2(a, b)
const bc = f2(b, c)
const ca = f2(c, a)
const min = Math.min(ab, bc, ca)

console.log({ ab, bc, ca, min })
const res = new Map()

for (let i = 0; i <= min; i += a) {
  for (let j = 0; j <= min; j += b) {
    for (let k = 0; k <= min; k += c) {
      if (i + j + k > min) {
        break
      }

      res.set(i + j + k, [i / a, j / b, k / c])
    }
  }
}

for (let i = 0; i <= min; i += 1) {
  if (!res.has(i)) {
    console.log(i)
  } else {
    const [x, y, z] = res.get(i)
    console.log(
      `${x * a + y * b + z * c} = ${x} * ${a} + ${y} * ${b} + ${z} * ${c} `
    )
  }
}
// console.log(Math.max(...res))
