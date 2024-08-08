// 1~15 の最小公倍数を総当たりで求める

const range = (n: number) => [...Array(n).keys()]
const nums = range(15).map((n) => n + 1)

for (let i = 1; i < 100000000; i++) {
  console.log(nums.map((n) => (i % n ? '0' : '1')).join(''))

  if (nums.every((n) => i % n === 0)) {
    console.log(i)
    break
  }
}
