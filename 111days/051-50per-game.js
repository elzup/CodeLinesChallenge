const rate = 0.51

const averageFinalMoney = (rate) => {
  let sum = 0
  for (let i = 0; i < 1000000; i++) {
    sum += finalMoney(rate)
  }
  return sum / 1000000
}
const finalMoney = (rate) => {
  const gameCount = 100

  let money = 100
  let bet = 10

  for (let i = 0; i < gameCount; i++) {
    money += playGame(bet, rate)
  }
  return money
}

const playGame = (money, rate) => {
  if (Math.random() < rate) {
    return money
  } else {
    return -money
  }
}

console.log(`勝率${rate * 100}% 平均最終所持金: ${averageFinalMoney(rate)}`)
