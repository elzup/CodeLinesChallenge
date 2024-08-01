// 魔法陣をランダムで解く
// 9! = 362880通り

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[r]] = [arr[r], arr[i]]
  }
  return arr
}

const range = (n) => [...Array(n).keys()]

const isMagic = (magic) => {
  return (
    magic[0] + magic[1] + magic[2] === 15 &&
    magic[3] + magic[4] + magic[5] === 15 &&
    magic[6] + magic[7] + magic[8] === 15 &&
    magic[0] + magic[3] + magic[6] === 15 &&
    magic[1] + magic[4] + magic[7] === 15 &&
    magic[2] + magic[5] + magic[8] === 15 &&
    magic[0] + magic[4] + magic[8] === 15 &&
    magic[2] + magic[4] + magic[6] === 15
  )
}
const genMagic = () => shuffle(range(9).map((i) => i + 1))
for (let i = 0; ; i++) {
  const magic = genMagic()
  if (isMagic(magic)) {
    console.log(i)
    console.log(magic[0], magic[1], magic[2])
    console.log(magic[3], magic[4], magic[5])
    console.log(magic[6], magic[7], magic[8])
    break
  }
}
