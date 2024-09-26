const base64Char =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

const k = 3
const range = (n) => [...Array(n).keys()]

const findBase64 = (pref) => {
  for (let i = 0; i < base64Char.length ** k; i++) {
    const cs = range(k).map((t) => base64Char[(i >> (t * 6)) % 64])
    const s = pref + cs.join('')
    const bs = btoa(s)
    if (bs.startsWith(s)) {
      return s
    }
  }
  return false
}

let pref = ''
for (let i = 0; i < 20; i++) {
  const res = findBase64(pref)
  console.log(res)

  pref = res
}
