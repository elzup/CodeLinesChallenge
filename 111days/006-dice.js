/*
サイコロ6個全部6が出るまで振る
*/
const range = (n) => [...Array(n).keys()]
const rand = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a

const dice = () => rand(1, 6)
const dice6 = () => range(8).map(dice)
const diceToChar = (n) => ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'][n - 1]

for (let i = 0; ; i++) {
  const dices = dice6()
  if (i % 1000 === 0) {
    console.clear()
    console.log(i)
    console.log(dices.map(diceToChar).join(' '))
  }

  if (dices.every((d) => d === 6)) {
    console.log(i)
    console.log(dices.map(diceToChar).join(' '))
    break
  }
}
