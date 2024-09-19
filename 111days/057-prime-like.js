// 見た目が素数っぽい合成数を並べる

// - 素数でない

function getDivisors(n) {
  let divisors = []
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i)
      if (i !== n / i) {
        divisors.push(n / i)
      }
    }
  }
  return divisors.sort((a, b) => a - b)
}
const isPrimeCheck = (n) => {
  const divs = getDivisors(n)
  return { isPrime: divs.length === 2, divs }
}
// - 2, 3, 5で割り切れない
const isPrimeLike = (n) => n % 2 === 0 || n % 3 === 0 || n % 5 === 0
// - 99表にない
const range = (n) => [...Array(n).keys()]
const nums99 = new Set(
  range(9)
    .map((i) => range(9).map((j) => (i + 1) * (j + 1)))
    .flat()
)
const is99Num = (n) => nums99.has(n)

for (let i = 1; i < 1000; i++) {
  const { isPrime, divs } = isPrimeCheck(i)
  if (!isPrime && !isPrimeLike(i) && !is99Num(i)) {
    console.log(i)
    console.log(divs)
  }
}
