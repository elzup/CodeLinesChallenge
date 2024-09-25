// 2^n + 2^(n + 1) + 2^(n + 2) + 2^(n + 3) + 2^(n + 4) = 2^(n + 5) - 1 ?

const f1 = (n) =>
  2 ** n + 2 ** (n + 1) + 2 ** (n + 2) + 2 ** (n + 3) + 2 ** (n + 4)
const f2 = (n) => 2 ** (n + 5) - 2 ** n
const f3 = (n) => 0b11111 << n

for (let i = 0; i < 10; i++) {
  console.log(i)
  console.log('f1', f1(i))
  console.log('f2', f2(i))
  console.log('f3', f3(i))
  console.log('f3b', f3(i).toString(2))
  console.log('d', f2(i) - f1(i))
  console.log()
}
