const crypto = require('crypto')

const generate32BitRandom = () => crypto.randomBytes(4).readUInt32BE(0)

const range = (n) => [...Array(n).keys()]
const main = () => {
  const rands = range(100).map((i) =>
    generate32BitRandom().toString(2).padStart(32, '0')
  )

  rands.sort((a, b) => score(a) - score(b))
  console.log(
    rands
      .map((v) => [...v].map((c) => (c === '0' ? ' ' : '#')).join(''))
      .join('\n')
  )
}

const score = (s) => parseInt(s, 2)
// const score = (s) => [...s].reduce((acc, v) => (v === '0' ? acc + 1 : acc), 0)
// [...s].findIndex((v) => v === '0') +
// 1 / ([...s].findIndex((v) => v === '1') + 1)

main()
