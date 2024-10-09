// 6174
// 7641 - 1467 = 6174
//   7 * 1000 + 6 * 100 + 4 * 10 + 1 * 1
// - 1 * 1000 + 4 * 100 + 6 * 10 + 7 * 1 = 6174
// (1000 - 1) * (7 - 1) + (100 - 10) * (6 - 4)

const comb = (arr) =>
  arr.reduce((a, c) => a.flatMap((a) => c.map((b) => [...a, b])), [[]])

const range = (n) => [...Array(n).keys()]
const sum = (a, b) => a + b
const suma = (a) => a.reduce(sum, 0)

const kaprekar = (k) => {
  if (k % 2 === 1) return
  comb(range(k / 2).map(() => range(10))).forEach((nums) => {
    const units = nums.map((v, i) => (10 ** (k - i - 1) - 10 ** i) * v)
    const ns = String(suma(units))

    if (String(ns).length < k) return

    const l = ns
      .split('')
      .map(Number)
      .sort((a, b) => b - a)

    if (nums.every((v, i) => l[i] - l[k - i - 1] === v)) {
      console.log(ns, `${l.join('')} - ${l.reverse().join('')}`)
    }
  })
}
kaprekar(12)

export default {}
