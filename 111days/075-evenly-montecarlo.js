for (let i = 1000; i < 1000001; i += 10) {
  let ni = 0
  let no = 0
  let niM = 0
  let noM = 0
  for (let x = 1; x < i; x++) {
    for (let y = 1; y < i; y++) {
      const px = x / i
      const py = y / i
      if (px * px + py * py < 1) {
        ni++
      } else {
        no++
      }
      if (Math.random() ** 2 + Math.random() ** 2 < 1) {
        niM++
      } else {
        noM++
      }
    }
  }
  console.log(i)

  console.log(`my:` + `${(4 * ni) / (ni + no)}`)
  console.log(`mo:` + `${(4 * niM) / (niM + noM)}`)
}
