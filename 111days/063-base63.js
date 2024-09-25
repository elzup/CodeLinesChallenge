const crypto = require('crypto')

const cyan = '\u001b[36m'
const reset = '\u001b[0m'
const pass = `m2UnvHLVxhbXbvGCDlyurwGPMPj2cXEOjkGVNBDnnHE`
const hilight = (s) => `${cyan}${s}${reset}`
const len = 20

// by crypto
const randBase64 = () => {
  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  return Buffer.from(array).toString('base64')
}
const genPass = (pref) => (hilight(pref) + randBase64()).slice(0, len)

let i = 0
console.log(genPass('aaaa['))
const t = setInterval(() => {
  i++
  const s = genPass(pass.slice(0, Math.floor(i / 10)))
  if (i > 100) {
    clearInterval(t)
  }
  console.log(s)
}, 20)
