// でっかい三角形を描く

const range = (n) => [...Array(n).keys()]

const w = 100
const res = range(w)
  .map((i) => {
    return range(w)
      .map((v) => (Math.abs(v - w / 2) < i / 2 ? '⬜' : '⬛️'))
      .join('')
  })
  .join('\n')

console.log(res)
