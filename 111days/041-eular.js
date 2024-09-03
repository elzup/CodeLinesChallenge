// オイラーの素数生成式の41の部分を別の数字にしてどうなるか

const start = Date.now()

const range = (n) => [...Array(n).keys()]
const tMax = 1000000
const xMax = 50

const memoIsPrime = {}

const isPrimeMemo = (n) => {
  if (n in memoIsPrime) return memoIsPrime[n]
  const prime = isPrime(n)
  memoIsPrime[n] = prime
  return prime
}

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

const nums = range(tMax).map((t) => {
  const f = euler(t)
  const ds = range(xMax).map((v) => isPrimeMemo(f(v)))
  const c = ds.findIndex((v) => !v)

  return {
    t,
    n: ds.filter((v) => v).length,
    ds,
    c,
  }
})

// nums.sort((a, b) => b.n - a.n) // 素数の割合
nums.sort((a, b) => b.c - a.c) // 最初に素数の連続する回数

const oxFmt = (a) => a.map((v) => (v ? 'o' : '_')).join('')
nums
  .splice(0, 10)
  .map(
    ({ t, ds, n }) =>
      `${t}`.padEnd(7, ' ') +
      `${((n / xMax) * 100).toFixed(2)}`.padStart(5, ' ') +
      '% ' +
      oxFmt(ds)
  )
  .forEach((v) => console.log(v))

console.log(Date.now() - start + 'ms')
