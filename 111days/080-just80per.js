const randOrders = (n) => {
  const a = Array.from({ length: n }, (_, i) => true)
  for (let i = 0; i < n * 0.8; i++) {
    a[i] = false
  }
  a.sort(() => Math.random() - 0.5)
  return a
}

const items = Array.from({ length: 100 }, (_, i) => i)
const judges = randOrders(items.length)

for (const v of items) {
  console.log(v, judges[v])
}
console.log('t', judges.filter(Boolean).length)
console.log('f', judges.filter((v) => !v).length)
