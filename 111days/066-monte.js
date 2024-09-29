// simulation Monte hall problem

let change = 0
let stay = 0

const makeDoors = () => {
  const doors = [0, 0, 0]
  doors[Math.floor(Math.random() * 3)] = 1
  return doors
}

for (let i = 1; i <= 1000000; i++) {
  const doors = makeDoors()
  const choice = Math.floor(Math.random() * 3)
  const open = doors.findIndex((d, i) => i !== choice && d !== 1)
  const newChoice = doors.findIndex((d, i) => i !== choice && i !== open)
  change += doors[newChoice]
  stay += doors[choice]
  console.log(
    `change: ${change} (${(change / i).toFixed(5)}%), stay: ${stay} (${(
      stay / i
    ).toFixed(5)}%)`
  )
}
