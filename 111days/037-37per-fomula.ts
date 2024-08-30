// 37%の法則を検証する
// シャッフルした2つの配列で同じ数字で順番がかぶるのが1つ以上ある確率が37%になることを検証する。

const shuffle = (arr: number[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const range = (n: number) => [...Array(n).keys()]

let hit = 0
let non = 0

for (const key in range(1000000)) {
  const cardNum = Math.floor(Math.random() * 30) + 4
  const a = shuffle(range(cardNum))
  const b = shuffle(range(cardNum))

  if (range(cardNum).some((i) => a[i] === b[i])) {
    hit++
  } else {
    non++
  }
}

console.log('hit', hit)
console.log('non', non)
console.log('rate', non / (hit + non))

export {}
