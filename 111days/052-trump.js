// 52枚のトランプをリフルシャッフルして混ざり具合を確認する
// Kendallの順位相関係数

const range = (n) => [...Array(n).keys()]
const cards = range(52)
const printCards = (cards) => {
  const suits = ['♠', '♡', '♢', '♣']
  const ranks = range(13).map((i) => i + 1)
  const marks = suits.flatMap((suit) =>
    ranks.map((rank) => `${suit}${String(rank).padEnd(2, ' ')}`)
  )
  const marks2 = cards.map((i) => marks[i])
  console.log(marks2.join(' '))
}

const riffle = (cards) => {
  const n = cards.length
  const half = n / 2
  const shuffled = []
  range(half).forEach((i) => {
    shuffled.push(cards[i])
    shuffled.push(cards[i + half])
  })
  return shuffled
}
const calcDisorderKendall = (cards1, cards2) => {
  const n = cards1.length
  let disorder = 0
  range(n).forEach((i) => {
    range(i + 1, n).forEach((j) => {
      const a = cards1[i]
      const b = cards1[j]
      const c = cards2[i]
      const d = cards2[j]
      if ((a < b && c > d) || (a > b && c < d)) {
        disorder++
      }
    })
  })
  return disorder
}

shuffled = [...cards]
for (let i = 0; i < 20; i++) {
  shuffled.sort(() => Math.random() - 0.5)
  printCards(shuffled)
  const disorder = calcDisorderKendall(cards, shuffled)
  console.log(disorder)
}
