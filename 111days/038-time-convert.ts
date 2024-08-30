// 時間を変換する関数

const convert = (
  hour: number
): {
  inMinutes: number
  inSeconds: number
  inMilliseconds: number
  inDay: number
} => {
  return {
    inMinutes: hour * 60,
    inSeconds: hour * 60 * 60,
    inMilliseconds: hour * 60 * 60 * 1000,
    inDay: hour / 24,
  }
}

const res = convert(3.8)
console.log(
  `3.8時間は、${res.inMinutes}分、${res.inSeconds}秒、${res.inMilliseconds}ミリ秒、${res.inDay}日です。`
)
