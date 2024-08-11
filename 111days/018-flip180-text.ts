// テキストを180度反転させる関数
const flipText180Map = {
  a: 'ɐ',
  b: 'q',
  c: 'ɔ',
  d: 'p',
  e: 'ǝ',
  f: 'ɟ',
  g: 'ƃ',
  h: 'ɥ',
  i: 'ᴉ',
  j: 'ɾ',
  k: 'ʞ',
  l: 'l',
  m: 'ɯ',
  n: 'u',
  o: 'o',
  p: 'd',
  q: 'b',
  r: 'ɹ',
  s: 's',
  t: 'ʇ',
  u: 'n',
  v: 'ʌ',
  w: 'ʍ',
  x: 'x',
  y: 'ʎ',
  z: 'z',
} as Record<string, string>

const flipText180 = (text: string): string => {
  return text
    .split('')
    .map((char) => flipText180Map[char] || char)
    .reverse()
    .join('')
}

console.log(flipText180('Hello, World!')) // ¡plɹoM ,ollǝH;
console.log(flipText180('fliptext'))
