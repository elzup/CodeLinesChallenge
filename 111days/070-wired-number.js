// 不思議数 = 過剰数 かつ 擬似完全数
// 過剰数: 約数の和が自分自身よりも大きい数
// 擬似完全数: 約数の組み合わせの和がどれも自分自身にならない数
// 最小は 70 次は 836 になる

const isKajo = (n) => {
  const sum = getDivs(n).reduce((acc, cur) => acc + cur, 0)
  return sum > n
}

const getDivs = (n) => {
  const res = []
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      res.push(i)
    }
  }
  return res
}
const combination = (arr) => {
  const res = []
  const dfs = (arr, i, acc) => {
    if (i === arr.length) {
      res.push(acc)
      return
    }
    dfs(arr, i + 1, acc)
    dfs(arr, i + 1, acc.concat(arr[i]))
  }
  dfs(arr, 0, [])
  return res
}

// 擬似完全数: 約数の組み合わせの和がどれも自分自身にならない数
const isGiji = (n) => {
  const divs = getDivs(n)
  const combs = combination(divs)
  return combs.find((c) => c.reduce((a, b) => a + b, 0) === n)
}

for (let i = 836; i <= 836; i++) {
  const k = isKajo(i)
  if (!k) {
    console.log(i)
  } else {
    const g = isGiji(i)
    console.log(i, 'o', g)
  }
}
