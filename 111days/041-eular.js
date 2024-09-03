// オイラーの素数生成式の41の部分を別の数字にしてどうなるか

const range = (n) => [...Array(n).keys()]

const isPrime = (n) => {
  if (n < 2) return false
  if (n === 2) return true
  if (n % 2 === 0) return false
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false
  }
  return true
}

const euler = (t) => {
  return (n) => n ** 2 + n + t
}

const nums = range(10000).map((i) => {
  const f = euler(i)
  const ds = range(50).map((v) => isPrime(f(v)))

  return {
    i,
    n: ds.filter((v) => v).length,
    text: `${i}`.padEnd(5, ' ') + ds.map((v) => (v ? 'o' : '_')).join(''),
  }
})

nums.sort((a, b) => b.n - a.n)

nums
  .splice(0, 10)
  .map((v) => v.text)
  .map((v) => console.log(v))
