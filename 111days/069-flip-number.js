// spin num

// 6 → 9
// 9 → 6
// 8 → 8
// 2 → 5
// 1 → 1
// 0 → 0

// with flip order
// 0123456789 → 68x92xx510

const convert = {
  6: 9,
  9: 6,
  8: 8,
  2: 5,
  1: 1,
  0: 0,
}
const convertNum = (nc) => convert[nc] ?? 'x'
const spinNum = (ns) => {
  return ns.split('').reverse().map(convertNum).join('')
}
console.log(spinNum('0123456789')) // 68x92xx510
console.log(spinNum('69'))
console.log(spinNum('96'))
console.log(spinNum('1260'))
