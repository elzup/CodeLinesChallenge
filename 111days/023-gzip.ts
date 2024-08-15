// 東京23区の文字列を圧縮する

import { gzip } from 'zlib'

const text =
  '東京都23区: 千代田中央港新宿文京台東墨田江東品川目黒大田世田谷渋谷中野杉並豊島北荒川板橋練馬足立葛飾江戸川区'

const buffer = Buffer.from(text, 'utf-8')
console.log('raw')
console.log(text)
console.log(buffer.toString('base64'))
console.log(buffer.toString('base64').length)

gzip(buffer, (_, result) => {
  console.log('result')
  console.log(result.toString('base64'))
  console.log(result.toString('base64').length)
})
