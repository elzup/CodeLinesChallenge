// 4x4 の魔法陣
/*
m0 m1 m2  x
m3 m4 m5  x
m6  x m7  x
 x  x  x  x

 1-16 の中から 7 つ選びチェックする
*/
const SUM = 34

const permutations = (arr, r) => {
  if (r === 0) return [[]]
  return arr.flatMap((v, i) => {
    const rest = permutations([...arr.slice(0, i), ...arr.slice(i + 1)], r - 1)
    return rest.map((x) => [v, ...x])
  })
}

const range = (n) => [...Array(n).keys()]
console.log(
  permutations(
    range(16).map((v) => v + 1),
    7
  ).length
)

process.exit(0)
console.log(
  permutations(
    range(16).map((v) => v + 1),
    7
  ).filter((m) => {
    /*

m0 m1 m2 t0 -> ok
m3 m4 m5 t1 -> ok
m6 t3 m7 t2 -> ok
t4 t5 t6 t7 -> no
 ↓  ↓  ↓  ↓
ok no ok ok


 */
    console.log(m)

    const t = []
    t[0] = SUM - (m[0] + m[1] + m[2])
    t[1] = SUM - (m[3] + m[4] + m[5])
    t[4] = SUM - (m[0] + m[3] + m[6])
    t[3] = SUM - (t[0] + m[5] + t[4])
    t[2] = SUM - (m[6] + t[3] + m[7])
    t[5] = SUM - (m[1] + m[4] + t[3])
    t[6] = SUM - (m[2] + m[5] + m[7])
    t[7] = SUM - (t[0] + t[1] + t[2])
    if (t.some((v) => v <= 0 || v > 16)) return false
    const all = [...t, ...m]
    if (new Set(all).size !== 16) return false
    if (!(Math.max(...all) === 16 || Math.min(...all) === 1)) return false
    if (
      !(
        m[1] + m[4] + t[3] + t[5] === SUM &&
        t[4] + t[5] + t[6] + t[7] === SUM &&
        m[0] + m[4] + m[7] + t[7] === SUM
      )
    )
      return false
    return true
  })
)
