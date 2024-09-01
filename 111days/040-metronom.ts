import { AudioContext } from 'node-web-audio-api'
const bpm = 100

const clear = () => {
  process.stdout.write('\x1b[2K')
  process.stdout.write('\r')
}

let n = 0
const tick = () => {
  clear()
  n++
  process.stdout.write((n % 2 === 0 ? 'x _' : '_ x') + `  ${n} (${bpm}bpm)`)
  sound()
}

setInterval(tick, 60000 / bpm)
const audioContext = new AudioContext()

const sound = () => {
  // AudioContextを作成

  const oscillator = audioContext.createOscillator()
  oscillator.type = 'sine' // 波形のタイプ（'sine', 'square', 'sawtooth', 'triangle' など）
  oscillator.frequency.setValueAtTime(440, audioContext.currentTime) // 周波数を設定（ここでは440Hz、A音）

  oscillator.connect(audioContext.destination)
  oscillator.start()

  setTimeout(() => {
    oscillator.stop()
  }, 100)
}

export {}
