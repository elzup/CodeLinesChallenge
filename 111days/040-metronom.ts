const bpm = 1000

const clear = () => {
  process.stdout.write('\x1b[2K')
  process.stdout.write('\r')
}

let n = 0
const tick = () => {
  clear()
  n++
  process.stdout.write((n % 2 === 0 ? 'x _' : '_ x') + `  ${n} (${bpm}bpm)`)
}

setInterval(tick, 60000 / bpm)

export {}
