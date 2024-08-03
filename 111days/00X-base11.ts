// 素数を11進数で書いてみる

const monthEnd = (month: number): number => {
  if (month === 2) {
    return 28
  } else if ([4, 6, 9, 11].includes(month)) {
    return 30
  } else {
    return 31
  }
}

const printCalendar = () => {
  let prevDay = 0
  for (let i = 1; i <= 12; i++) {
    const end = monthEnd(i)
    console.log(`Month ${i}:`)
    console.log('Sun Mon Tue Wed Thu Fri Sat')
    let cells = ''
    cells += '   '.repeat(prevDay)

    for (let j = 1; j <= end; j++) {
      cells += `${format(j)}`.padStart(3)
      if ((j + prevDay) % 7 === 0) {
        console.log(cells)
        cells = ''
      } else {
        cells += ' '
      }
    }
    prevDay = (end + prevDay) % 7
  }
}

printCalendar()
function format(j: number) {
  return j.toString(11)
}
