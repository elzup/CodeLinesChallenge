const range = (n) => [...Array(n).keys()]
const cards = range(52).map((i) => ({ s: Math.floor(i / 13), n: (i % 13) + 1 }))
cards.push({ s: 'J', n: 0 })
const suits = '♠♡♢♣'
const cardStr = ({ s, n }) => (suits[s] ?? 'J') + `${n}`.padEnd(2, ' ')
const cardsStr = (cards) => cards.map(cardStr).join(' ')
const printCards = (cards) => console.log(cardsStr(cards))

// printCards([cards[0], cards[1], cards[2], cards[3], cards[4]])

const is5Card = (cards) => {
  return cards.every((card) => card.n === 1 || card.s === 'J')
}

const shuffle = ([...cards]) => {
  const n = cards.length
  const shuffled = []
  range(n).forEach((i) => {
    const j = Math.floor(Math.random() * (n - i)) + i
    shuffled.push(cards[j])
    cards[j] = cards[i]
  })
  return shuffled
}

let i = 0
while (true) {
  i++
  const hand = shuffle(cards).slice(0, 5)
  // printCards(hand)
  // console.log(hand)

  if (is5Card(hand)) {
    console.log(i)

    printCards(hand)
    break
  }
}
