const numbers = [3, 5, 7, 2]

const operators = ['+', '-', '*', '/']

function getOperatorCombinations(operators, length) {
  if (length === 1) return operators.map((op) => [op])
  const combinations = []
  const smallerCombos = getOperatorCombinations(operators, length - 1)
  for (const smallerCombo of smallerCombos) {
    for (const operator of operators) {
      combinations.push([...smallerCombo, operator])
    }
  }
  return combinations
}

const ops = getOperatorCombinations(operators, 3)
const res = {}

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    for (let k = 1; k < 10; k++) {
      for (let l = 1; l < 10; l++) {
        const nums = [i, j, k, l]
        ops.forEach(([op1, op2, op3]) => {
          const query = `${nums[0]} ${op1} ${nums[1]} ${op2} ${nums[2]} ${op3} ${nums[3]}`
          const ans = eval(query)
          // console.log(query, ans)

          res[ans] ||= 0
          res[ans]++
        })
      }
    }
  }
}
const total = 10 ** 4 * ops.length

// sort
Object.entries(res)
  .filter(([key, value]) => value >= 20)
  .sort((a, b) => Number(b[0]) - Number(a[0])) // by value
  // .sort((a, b) => Number(b[1]) - Number(a[1])) // by count
  .filter((a, i) => i < 100)
  .forEach(([key, value]) => console.log(key, value))

console.log(total)
