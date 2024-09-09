// ランダムな初期配置でチェスの盤面を生成する

const range = (n) => [...Array(n).keys()]

const pieces = ('♟♟♟♟♟♟♟♟' + '♜♞♝♛♚♝♞♜')
  // const pieces = ('PPPPPPPP' + 'RNBQKBNR')
  .split('')
  .sort(() => Math.random() - 0.5)
const boards = []
boards.push(pieces.slice(0, 8))
boards.push(pieces.slice(8, 16))
boards.push('')
boards.push('')
boards.push('')
boards.push('')

boards.push(pieces.slice(8, 16))
boards.push(pieces.slice(0, 8))
boards.forEach((row) => {
  console.log(
    range(8)
      .map((i) => row[i] || '.')
      .join(' ')
  )
})
