// √2 を計算する
// √2 = 1.4142135623730951

let h = 10
let l = 1

for (let i = 0; i < 100; i++) {
  const m = (h + l) / 2
  if (m * m > 2) {
    h = m
  } else {
    l = m
  }
}
console.log(l)
console.log(JSON.stringify(l, null, 2))
