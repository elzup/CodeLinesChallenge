// nCr
const c = (n, r) => {
  if (r > n) return 0
  let result = 1
  for (let i = 0; i < r; i++) {
    result *= (n - i) / (i + 1)
  }
  return result
}

const fullHouseProb = (numJoker) => {
  const totalHandds = c(52 + numJoker, 5)
  return (
    (c(13, 1) * c(4, 1) * c(12, 1) * c(4, 2) +
      numJoker * c(13, 1) * c(4, 1) * c(12, 1) * c(4, 2) * c(5, numJoker)) /
    totalHandds
  )
}

const printFullHouseProb = (numJoker) => {
  console.log(
    `Joker: ${numJoker}, Prob: ${(
      fullHouseProb(numJoker).toFixed(6) * 100
    ).toFixed(2)}%`
  )
}

for (let i = 0; i <= 10; i++) {
  printFullHouseProb(i)
}
