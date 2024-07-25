// 01をランダムにたくさん出力

const range = (n) => [...Array(n).keys()]

range(1000).forEach(() => {
  process.stdout.write(Math.random() > 0.5 ? '1' : '0')
})
