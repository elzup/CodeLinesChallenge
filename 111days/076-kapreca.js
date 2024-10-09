// 6174
// 7641 - 1467 = 6174
//   7 * 1000 + 6 * 100 + 4 * 10 + 1 * 1
// - 1 * 1000 + 4 * 100 + 6 * 10 + 7 * 1 = 6174
// (1000 - 1) * (7 - 1) + (100 - 10) * (6 - 4)

for (let ad = 0; ad < 10; ad++) {
  for (let bc = 0; bc < 10; bc++) {
    const n = ad * (10 ** 3 - 1) + bc * (10 ** 2 - 10)
    if (String(n).length < 4) {
      continue
    }
    const [a, b, c, d] = String(n)
      .split('')
      .map(Number)
      .sort((a, b) => b - a)

    if (a - d === ad && b - c === bc) {
      console.log(`${n} = ${ad} ${bc}`)
    }
  }
}
