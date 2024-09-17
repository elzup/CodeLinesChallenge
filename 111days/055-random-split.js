const range = (n) => [...Array(n).keys()]

const randDivs = () => {
  const numbers = []
  const divs = range(53).map((v) => v + 2)

  while (numbers.length < 9) {
    const rand = Math.floor(Math.random() * divs.length)
    numbers.push(divs[rand])
    divs.splice(rand, 1)
  }

  return numbers
}

const randParts = () => {
  const divs = randDivs()

  divs.sort((a, b) => a - b)
  divs.unshift(0)
  return divs.map((v, i) => (divs[i + 1] ?? 55) - v)
}

console.log(randParts())

console.log(randParts().reduce((a, b) => a + b, 0))
