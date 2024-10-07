const pi = String(Math.PI)

const calcPiLeibniz = (v, i) => v + (i % 2 === 0 ? 1 : -1) / (2 * i + 1)
const calcPiWallis = (v, i) => (v * (4 * i ** 2)) / (4 * i ** 2 - 1)
const arctan = (x, v) => {
  let result = 0
  for (let i = 0; i < v; i++) {
    let term = Math.pow(x, 2 * i + 1) / (2 * i + 1)
    result += (i % 2 === 0 ? 1 : -1) * term
  }
  return result
}

const calcPiMachin = (v) => 4 * (4 * arctan(1 / 5, v) - arctan(1 / 239, v))

const correctPrint = (v) =>
  String(v)
    .split('')
    // .map((c, i) => c)
    .map((c, i) => (pi[i] === c ? c : '*'))
    .join('')
    .padEnd(20, ' ')

let a = 0
let b = 2
for (let i = 0; i <= 1000000; i++) {
  a = calcPiLeibniz(a, i)
  b = calcPiWallis(b, i + 1)
  console.log(
    correctPrint(a * 4),
    correctPrint(b)
    // correctPrint(calcPiMachin(i))
  )
}

export default {}
