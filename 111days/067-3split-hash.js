const miniHash = (n) => Math.abs(((n * 2654435761) ^ (n >> 5)) % 97)

for (let i = 0; i < 1000; i++) {
  process.stdout.write('.1#'[miniHash(i) % 3])
  if (i % 10 === 9) {
    process.stdout.write('\n')
  }
}
