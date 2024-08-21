const isLeapYearLight = (year: number): boolean => year % 4 === 0

const isLeapYear = (year: number): boolean =>
  year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)

const isLeapYearUse0229 = (year: number): boolean =>
  new Date(year, 1, 29).getMonth() === 1
