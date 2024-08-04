// 12進数で時計を表示する
// 00:00 ~ 23:59

const fmt = (i: number) => i.toString(5).padStart(2, '0')
const normal = (i: number) => String(i).padStart(2, '0')

for (let i = 0; i < 24; i++) {
  for (let j = 0; j < 60; j++) {
    console.log(`${normal(i)}:${normal(j)} -> ${format(i)}:${format(j)}`)
  }
}

for (let j = 0; j < 60; j++) {
  console.log(`${normal(j)} -> ${format(j)}`)
}
