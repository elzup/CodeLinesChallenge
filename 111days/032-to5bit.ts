// 8bit に分割する

const msg = 'message'

const bins = msg
  .split('')
  .map((c) => c.charCodeAt(0).toString(2).padStart(8, '0'))
  .join('')
console.log(
  bins
    .match(/.{1,4}/g)!
    .map((v) => parseInt(v.padEnd(4, '0'), 2).toString(16))
    .join('')
)

const bins5 = bins.match(/.{1,5}/g)!.map((s: string) => s.padEnd(5, '0'))

const underline = '\x1b[4m'
const reset = '\x1b[0m'

const encoded = bins5
  .map((s: string) => {
    const [b, ...b4] = s
    const hex = parseInt(b4.join('').padEnd(4, '0'), 2).toString(16)
    return b === '0' ? hex : underline + hex + reset
  })
  .join('')

console.log({ bins, bins5 })
console.log(encoded)
