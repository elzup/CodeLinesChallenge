// 7byte ascii を bit flip で暗号化

// const plain = '111day'
const plain = '111day AI coding'

const chr = (c) => String.fromCharCode(c)
const ord = (c) => c.charCodeAt(0)

const xorCipher = (key, text) => {
  return text
    .split('')
    .map((c) => chr(ord(c) ^ key))
    .join('')
}

const encrypted = xorCipher(0b1111, plain)
const decrypted = xorCipher(0b1111, encrypted)

console.log('plain:', plain)
console.log('encrypted:', encrypted)
console.log('decrypted:', decrypted)
