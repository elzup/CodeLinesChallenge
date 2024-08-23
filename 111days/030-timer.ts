// 30秒カウントダウンタイマー
//
// format
// 20.84 ████████████████████
//  1.31 █

const start = Date.now()

setInterval(() => {
  const now = Date.now()
  const elapsed = (now - start) / 1000
  const rest = 30 - elapsed

  const bar = '█'.repeat((elapsed / 30) * 20)
  const space = ' '.repeat(20 - bar.length)

  process.stdout.write(`\r${rest.toFixed(2)} ${bar}${space}`)
  if (elapsed > 30) {
    process.exit()
  }
}, 5)
