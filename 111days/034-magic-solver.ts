// 4x4 の魔法陣をとく

const q = [
  [0, 0, 8, 13],
  [0, 0, 10, 0],
  [14, 0, 0, 0],
  [4, 0, 5, 16],
].flat()

const sum = 34

/*
[ 0, 1, 2, 3,
  4, 5, 6, 7,
  8, 9, 10, 11,
  12, 13, 14, 15 ]
*/

const checks = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [0, 4, 8, 12],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  [0, 5, 10, 15],
  [3, 6, 9, 12],
  [0, 3, 12, 15],
  [5, 6, 9, 10],
  [1, 2, 13, 14],
  [4, 7, 8, 11],
  [1, 7, 14, 8],
  [2, 4, 13, 11],
]

let remain = q.filter((i) => i === 0).length

while (remain > 0) {
  for (const check of checks) {
    const s = check.map((i) => q[i])
    if (s.filter((i) => i === 0).length !== 1) continue
    const targetIndex = check.find((i) => q[i] === 0)
    if (targetIndex === undefined) throw new Error('targetIndex is undefined')
    q[targetIndex] = sum - s.reduce((a, b) => a + b, 0)
    remain--
  }
}

console.log(`${q[0]} ${q[1]} ${q[2]} ${q[3]}`)
console.log(`${q[4]} ${q[5]} ${q[6]} ${q[7]}`)
console.log(`${q[8]} ${q[9]} ${q[10]} ${q[11]}`)
console.log(`${q[12]} ${q[13]} ${q[14]} ${q[15]}`)
