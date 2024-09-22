const clear = () => {
  process.stdout.write('\x1b[2K')
  process.stdout.write('\r')
}

let t59 = 0
let t60 = 0

let i = 0
const pgLen = 20

setInterval(() => {
  i++
  const r60 = i % 60
  const r59 = i % 59
  if (r60 === 0) {
    t60++
  }

  if (r59 === 0) {
    t59++
  }
  clear()
  process.stdout.write(
    new Date().toISOString() +
      ' ' +
      ' 59:' +
      t59 +
      ' 60:' +
      t60 +
      ' ' +
      '.'.repeat(Math.floor((r59 / 59) * pgLen)).padEnd(pgLen, ' ') +
      ' ' +
      '.'.repeat(Math.floor((r60 / 60) * pgLen)).padEnd(pgLen, ' ')
  )
}, 1000 / 60)
