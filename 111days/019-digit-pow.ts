// nを各桁の数乗した和がnに等しい数を探す

// 19^1 + 19^1 != 11
// 19^3 + 19^5 != 35
//
// 52135640

const n = 19

const check = (m: number) => {
  return (
    String(m)
      .split('')
      .reduce((acc, cur) => acc + Math.pow(n, Number(cur)), 0) === m
  )
}

for (let i = 0; i < 1000000000; i++) {
  if (check(i)) {
    console.log(i)
  }
}
