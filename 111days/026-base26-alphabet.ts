// アルファベットだけの base26 a-z

console.log((33333).toString(26))

const base26 = (n: number) => {
  const result: string[] = []
  while (n > 0) {
    const r = n % 26
    result.unshift(String.fromCharCode(97 + r))
    n = Math.floor(n / 26)
  }
  return result.join('')
}

for (let i = 0; i < 100; i++) {
  console.log(i, base26(i).padStart(10, 'a'))
}
