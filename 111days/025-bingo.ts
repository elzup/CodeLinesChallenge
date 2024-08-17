// ビンゴカードを作る
// [ [0, 1, 2, 3, 4],
//   [0, 1, 2, 3, 4],
//   [0, 1, x, 3, 4],
//   [0, 1, 2, 3, 4],
//   [0, 1, 2, 3, 4] ]

const range = (n: number) => [...Array(n).keys()]

const sample = (n: number, a: number[]) => {
  const result: number[] = []
  for (let i = 0; i < n; i++) {
    const r = Math.floor(Math.random() * a.length)
    result.push(a[r])
    a.splice(r, 1)
  }
  return result
}
const chunk = (n: number, a: number[]) => {
  const result: number[][] = []
  for (let i = 0; i < a.length; i += n) {
    result.push(a.slice(i, i + n))
  }
  return result
}

const card = chunk(5, sample(25, range(90)))
card[2][2] = -1
console.log(card)
