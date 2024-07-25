// 11月11日の 111日前は何日

// 2024-11-11 111
// 2024-11-10 110
// 2024-11-09 109

const day = new Date('2024-11-11')
for (let i = 0; i < 111; i++) {
  console.log(
    `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(
      2,
      '0'
    )}-${String(day.getDate()).padStart(2, '0')} ${111 - i}`
  )
  day.setDate(day.getDate() - 1)
}
