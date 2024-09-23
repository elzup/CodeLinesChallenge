const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const flatMonths = [
  30,
  30,
  30 + 1,
  30,
  30 + 1,
  30,
  30 + 1,
  30,
  30,
  30 + 1,
  30,
  30 + 1,
] // 365 = 30 * 12 + 5

const range = (n) => [...Array(n).keys()]

const print = (months) => {
  months.forEach((d, m) => {
    const days = range(d).map((i) => i + 1)

    console.log(`M${m + 1}:` + days.join(''))
    days.slice(25).forEach((d) => {
      console.log(d)
    })
  })
}
print(months)
console.log()

print(flatMonths)
