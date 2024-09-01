// 初音ミク何周年か出す関数
// 2007年8月31日リリース

// x周年とy日

const dateDiff = (date1, date2) => {
  let yDiff = date2.getFullYear() - date1.getFullYear()
  let mDiff = date2.getMonth() - date1.getMonth()
  let dDiff = date2.getDate() - date1.getDate()
  if (dDiff < 0) {
    mDiff--
    dDiff += new Date(date2.getFullYear(), date2.getMonth(), 0).getDate()
  }
  if (mDiff < 0) {
    yDiff--
    mDiff += 12
  }

  return `${yDiff}年${mDiff}ヶ月${dDiff}日`
}

const mikuAniv = (today) => {
  const miku = new Date(2007, 7, 31)
  return dateDiff(miku, today)
}

console.log(mikuAniv(new Date()))
