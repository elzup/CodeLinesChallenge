const first9Primes = [2, 3, 5, 7, 11, 13, 17, 19, 23]

// 99 table
console.log(
  ['', ...first9Primes].map((v) => String(v).padStart(4, ' ')).join(' ')
)
for (let i = 0; i < first9Primes.length; i++) {
  const nums = [
    first9Primes[i],
    ...first9Primes.map((num) => num * first9Primes[i]),
  ].map((v) => String(v).padStart(4, ' '))
  console.log(nums.join(' '))
}
