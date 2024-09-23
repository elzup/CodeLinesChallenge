const toBase60 = (n) => {
  const digits = []

  while (n > 0) {
    digits.unshift(n % 60)
    n = Math.floor(n / 60)
  }
  return digits
}

let i = 0
setInterval(() => {
  i++
  console.log(
    `${i} `.padStart(10, ' ') +
      toBase60(i)
        .map((v) => String(v).padStart(2, `0`))
        .join(':')
        .padStart(10, ` `)
  )
}, 1)
