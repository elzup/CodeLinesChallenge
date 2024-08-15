// 1 -> ①

// ① の charcode

const charCode = '①'.charCodeAt(0)

const marumoji = (n: number) => {
  if (n < 1 || n > 20) return ''
  return String.fromCharCode(charCode + n - 1)
}

console.log('1', marumoji(1))
console.log('2', marumoji(2))
console.log('19', marumoji(19))
console.log('20', marumoji(20))
console.log('21', marumoji(21))
