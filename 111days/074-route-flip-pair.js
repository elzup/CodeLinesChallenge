// √abc = de
// √cba = ed

const revNum = (n) => {
  return parseInt(n.toString().split('').reverse().join(''))
}

for (let n = 100; n < 1000; n++) {
  const m = revNum(n)
  const abc = n ** 2
  const cba = m ** 2
  if (abc === revNum(cba)) {
    console.log(`${n} = √${abc}`)
    console.log(`${m} = √${cba}`)
    console.log()
  }
}
