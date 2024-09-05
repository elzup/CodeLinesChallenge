// ピタゴラス数を探す
const hits = {}

function gcd(a, b) {
  // ユークリッドの互除法で最大公約数を求める
  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  return a
}

function gcd3(a, b, c) {
  return gcd(a, gcd(b, c)) === 1
}

for (let a = 1; a <= 300; a++) {
  for (let b = a + 1; b <= 500; b++) {
    const c = Math.sqrt(a ** 2 + b ** 2)

    if (Math.floor(c) === c && b != c && gcd3(a, b, c)) {
      console.log(a, b, c)
      hits[a] = true
      hits[b] = true
      hits[c] = true
    }
  }
} // 3 4 5

const range = (n) => [...Array(n).keys()]
for (let i = 0; i < 10; i++) {
  console.log(
    range(10)
      .map((v) => i * 10 + v)
      .map((v) => (hits[v] ? 'o' : '_'))
      .join('')
  )
}
