const r2 = Math.sqrt(3)

let res = r2
for (let i = 1; i < 1000; i++) {
  res = r2 ** res
  console.log(i, res)
}
