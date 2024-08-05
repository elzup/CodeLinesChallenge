// 13億 loop time

const start = Date.now()

for (let i = 0; i < 13_0000_0000; i++) {
  // do nothing
}

const end = Date.now()

const elapsed = end - start
console.log('elapsed:', elapsed, 'ms')
