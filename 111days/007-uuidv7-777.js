// uuidv7 末尾 3文字が 777 になるものを見つける

import { uuidv7 } from 'uuidv7'

for (let i = 0; ; i++) {
  const uuid = uuidv7()
  console.log(new Date())
  console.log(uuid)
  if (uuid.slice(-3) === '777') {
    break
  }
}
