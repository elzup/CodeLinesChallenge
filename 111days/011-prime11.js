// 素数を11進数で出力してみる

const toBase11 = (num) => num.toString(11)

const prime1000 = () => {
  const prime = []
  for (let i = 2; i < 1000; i++) {
    let isPrime = true
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) prime.push(i)
  }
  return prime
}

const obj = {}

console.log(
  prime1000()
    .map((num) => {
      const bn = toBase11(num)
      const last = bn[bn.length - 1]
      obj[last] = (obj[last] ?? 0) + 1
      return bn
    })
    .join('\n')
)
console.log(obj)
