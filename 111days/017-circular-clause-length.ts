// 1 / n の循環数を出す
// 1 / 17 => '0588235294117647'
// 1 / 3 => '3'
// 1 / 7 => '142857'
function findRepeatingDecimal(numerator: number, denominator: number): string {
  let result = ''
  let remainderMap = new Map<number, number>()
  let remainder = numerator % denominator

  while (remainder !== 0 && !remainderMap.has(remainder)) {
    remainderMap.set(remainder, result.length)
    remainder *= 10
    result += Math.floor(remainder / denominator).toString()
    remainder %= denominator
  }

  if (remainder === 0) {
    return '' // 循環節がない場合
  } else {
    return result.substring(remainderMap.get(remainder)!)
  }
}

const printRepeatingDecimal = (n: number) => {
  const r = findRepeatingDecimal(1, n)
  if (r) console.log(`1 / ${n},"${n}","${r}",${r.length},${r.length / n}`)
}

for (let i = 0; i < 100; i++) {
  printRepeatingDecimal(i)
}
