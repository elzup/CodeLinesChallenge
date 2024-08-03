// 円周率 10万桁の数字に偏りがあるか調べる
// curl "https://raw.githubusercontent.com/IonicaBizau/pi-decimals/master/lib/pi.txt" > 111days/data/pi.txt

import { readFileSync } from 'fs'

const piTxt = readFileSync('./111days/data/pi.txt', 'utf-8').substring(
  0,
  100000
)

const res = piTxt
  .split('')
  .filter((v) => v !== '.')
  .reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1
    return acc
  }, {} as { [key: string]: number })

console.log(res)
