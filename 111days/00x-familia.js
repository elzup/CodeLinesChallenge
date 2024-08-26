// 合計が33になるような4x4の魔法陣

// 1~33 を 3x3 に配置して 4x4 の魔法陣にする
// 再起的に全探索する

const N = 4
const SUM = 33
let p = 1

/**
 * @param {number[]} m
 * @param {number} d
 * @param {number[]} t
 *
 * [m0, m1, m2, t0,
 *  m3, m4, m5, t1,
 *  m6, m7, m8, t2,
 *  t3, t4, t5, t6]
 */

const magic = (m, d, t) => {
  let nextMax = SUM
  let nextMin = 1
  if (d === 1) {
    nextMax = SUM - m[0]
  }
  if (d === 2) {
    // [o, o, x, -]
    // [?, ?, ?, -]
    // [?, ?, ?, -]
    nextMax = SUM - m[0] - m[1]
  } else if (d === 3) {
    // [o, o, o, -]
    // [x, ?, ?, -]
    // [?, ?, ?, -]
    t[0] = SUM - (m[0] + m[1] + m[2])
    nextMax = SUM - m[0]
  } else if (d === 4) {
    // [o, o, o, -]
    // [o, x, ?, -]
    // [?, ?, ?, -]
    nextMax = SUM - Math.max(m[1], m[3])
  } else if (d === 5) {
    // [o, o, o, -]
    // [o, o, x, -]
    // [?, ?, ?, -]
    nextMax = SUM - Math.max(m[2], m[3] + m[4])
    const t1max = SUM - t[0]
    nextMin = SUM - (m[3] + m[4] + t1max)
  } else if (d === 6) {
    // [o, o, o, -]
    // [o, o, o, -]
    // [x, ?, ?, -]
    t[1] = SUM - (m[3] + m[4] + m[5])
    const t3max = SUM - (t[0] + m[5])
    nextMax = SUM - m[0] - m[3]
    nextMin = SUM - (t3max + m[0] + m[3])
  } else if (d === 7) {
    // [o, o, o, -]
    // [o, o, o, -]
    // [o, x, ?, -]

    t[3] = SUM - (m[0] + m[3] + m[6])
    // 斜めから自明なのでスキップ
    m[7] = SUM - (t[0] + m[5] + t[3])
    magic(m, d + 1, t)
    return
    // nextMax = SUM - Math.max(m[1] + m[4], m[6])
    // t4max = SUM - t[3]
    // nextMin = SUM - (t[3] + m[1] + m4max)
  } else if (d === 8) {
    // [o, o, o, -]
    // [o, o, o, -]
    // [o, o, x, -]
    t[4] = SUM - (m[1] + m[4] + m[7])
    nextMax = SUM - Math.max(m[2] + m[5], m[6] + m[7], m[0] + m[4])
    const t2max = SUM - (t[0] + t[1])
    const t5max = SUM - (t[0] + t[1])
    nextMin = SUM - Math.max(t2max + m[6] + m[7], t5max + m[2] + m[5])
  }
  if (d === 9) {
    t[2] = SUM - (m[6] + m[7] + m[8])
    t[5] = SUM - (m[2] + m[5] + m[8])
    t[6] = SUM - (m[0] + m[4] + m[8])
    p++
    if (
      SUM !== t[0] + t[1] + t[2] + t[6] ||
      SUM !== t[3] + t[4] + t[5] + t[6]
    ) {
      return
    }

    console.log(m.join(','))
    console.log(t.join(','))
    return
  }
  for (let j = nextMin; j <= nextMax; j++) {
    m[d] = j
    magic(m, d + 1, t)
  }
}

magic([], 0, [])
console.log(p)
