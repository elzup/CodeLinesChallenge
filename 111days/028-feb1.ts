// 2月がカレンダーに4行で収まる年
// 日曜始まり

const isUruu = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

const isDaySunFeb01 = (year: number): boolean => {
  const day = new Date(year, 1, 1).getDay()
  return day === 1
}

const hit = (year: number) => isDaySunFeb01(year) && !isUruu(year)

for (let i = 2000; i < 2100; i++) {
  if (hit(i)) {
    console.log(i)
  }
}
