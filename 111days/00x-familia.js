// 合計が33になるような4x4の魔法陣

// 1~33 を 3x3 に配置して 4x4 の魔法陣にする
// 再起的に全探索する

const N = 4
const SUM = 33
let p = 1

/**
 * @param {number[]} m
 * @param {number} d
 * @param {number} t
 * @param {number[]} td
 */

const magic = (m, d, t, td) => {
  let nextMin = 0
  if (d === 1) {
    nextMin = SUM - m[0]
  }
  if (d === 2) {
    // [o, o, x, -]
    // [?, ?, ?, -]
    // [?, ?, ?, -]
    nextMin = SUM - m[0] - m[1]
  } else if (d === 3) {
    // [o, o, o, -]
    // [x, ?, ?, -]
    // [?, ?, ?, -]
    nextMin = SUM - m[0]
  } else if (d === 4) {
    // [o, o, o, -]
    // [o, x, ?, -]
    // [?, ?, ?, -]
    nextMin = SUM - Math.max(m[1], m[3])
  } else if (d === 5) {
    // [o, o, o, -]
    // [o, o, x, -]
    // [?, ?, ?, -]
    nextMin = SUM - Math.max(m[2], m[3] + m[4])
  } else if (d === 6) {
    // [o, o, o, -]
    // [o, o, o, -]
    // [x, ?, ?, -]
    nextMin = SUM - m[0] - m[3]
  } else if (d === 7) {
    // [o, o, o, -]
    // [o, o, o, -]
    // [o, x, ?, -]
    nextMin = SUM - Math.max(m[1] + m[4], m[6])
  } else if (d === 8) {
    // [o, o, o, -]
    // [o, o, o, -]
    // [o, o, x, -]
    nextMin = SUM - Math.max(m[2] + m[5], m[6] + m[7])
  }
  if (d === 9) {
    // console.log(m.join(''))
    p++
    return
  }
  for (let j = 0; j <= nextMin; j++) {
    m[d] = j
    magic(m, d + 1, t)
  }
}

magic([], 0, 0, [], 0)
console.log(p)
