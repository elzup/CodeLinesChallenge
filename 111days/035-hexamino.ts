// hexamino

/*
bit map
  0  1  2  3  4  5
  6  7  8  9 10 11
 12 13 14 15 16 17
*/

const poly = `
0111000
0011000`
  .trim()
  .split('\n')

const isHexamino = (poly: string[]) => {
  const h = poly.length
  const w = poly[0].length

  const bitmap = poly.map((line) => line.split('').map((c) => c === '1'))

  const dfs = (x: number, y: number, visited: boolean[][]) => {
    if (x < 0 || w <= x || y < 0 || h <= y) return
    if (visited[y][x]) return
    if (!bitmap[y][x]) return
    visited[y][x] = true
    dfs(x - 1, y, visited)
    dfs(x + 1, y, visited)
    dfs(x, y - 1, visited)
    dfs(x, y + 1, visited)
  }

  const visited = Array.from({ length: h }, () =>
    Array.from({ length: w }, () => false)
  )

  let count = 0

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (bitmap[y][x] && !visited[y][x]) {
        count++
        dfs(x, y, visited)
      }
    }
  }

  const c = poly
    .map((l) => l.split(''))
    .flat()
    .filter((c) => c === '1').length

  return count === 1 && c === 6
}

console.log('isHexamino', isHexamino(poly))
