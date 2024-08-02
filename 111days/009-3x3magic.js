// 魔法陣をランダムで解く
// 9! = 362880通り

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[r]] = [arr[r], arr[i]]
  }
  return arr
}

const range = (n) => Array.from({ length: n }, (_, i) => i)

const isMagic = (magic) => {
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ]
  const cols = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ]
  const diagonals = [
    [0, 4, 8],
    [2, 4, 6],
  ]

  const sums = [...rows, ...cols, ...diagonals].map((indices) =>
    indices.reduce((sum, index) => sum + magic[index], 0)
  )

  return sums.every((sum) => sum === 15)
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
