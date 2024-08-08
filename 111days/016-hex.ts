const hexPrint = (n: number) => {
  console.log(`${n}: ${n.toString(16)}`)
}

;[1, 2, 10, 100, -100, -10, 0.1, 0.5, 0.123, 1 / 3, Math.PI, -0, ~-11].forEach(
  hexPrint
)
