// 77 の N乗で 77 が 77 個出てくる最初の N
/* global BigInt */

const highlight = (s) => `\u001b[31m${s}\u001b[0m`
const hl77 = (s) => s.replace(/77/g, highlight('77'))

for (let i = 1; ; i++) {
  const n = 77n ** BigInt(i)
  const count77 = String(n).match(/77/g)?.length
  if (count77 >= 77) {
    console.log(i)
    console.log(count77)
    console.log(hl77(String(n)))
    break
  }
}
