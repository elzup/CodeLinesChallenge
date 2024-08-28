// ランダムに絵文字を出力する

const ranges = [
  [0x1f600, 0x1f64f],
  // [0x1f300, 0x1f5ff],
  // [0x1f680, 0x1f6ff],
  // [0x1f3a0, 0x1f3ff],
  // [0x1f400, 0x1f4ff],
  // [0x1f950, 0x1f96f],
  // [0x1f1e6, 0x1f1ff],
  // [0x2600, 0x26ff],
  // [0x2700, 0x27bf],
] as const

const randomEmoji = () => {
  const [min, max] = ranges[Math.floor(Math.random() * ranges.length)]
  return String.fromCodePoint(Math.floor(Math.random() * (max - min)) + min)
}
const range = (n: number) => [...Array(n).keys()]

for (const _ of range(6)) {
  console.log(
    range(6)
      .map(() => randomEmoji())
      .join('')
  )
}

export {}
