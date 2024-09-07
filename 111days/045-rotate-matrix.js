// so big diamond
const diamond = `
                        *
                       ***
                      *****
                     *******
                    *********
                   ***********
                  *************
                 ***************
                *****************
               *******************
              *********************
             ***********************
            *************************
           ***************************
          *****************************
         *******************************
        *********************************
       ***********************************
      *************************************
     ***************************************
    *****************************************
                    ********
                    ********
                    ********
                    ********
                    ********
                    ********
                    ********
                    ********
                    ********

`
  .trim()
  .split('\n')

const n = Math.max(diamond.length, ...diamond.map((v) => v.length))

const cos45 = Math.cos(Math.PI / 4)
const sin45 = Math.sin(Math.PI / 4)

const rotate = [
  [cos45, sin45],
  [-sin45, cos45],
]

const centerX = Math.floor(n / 2)
const centerY = Math.floor(n / 2)

const range = (n) => [...Array(n).keys()]
const grid = range(n).map(() => range(n).map(() => ' '))

for (let y = 0; y < n; y++) {
  for (let x = 0; x < n; x++) {
    const dx = x - centerX
    const dy = y - centerY
    const nx = Math.floor(centerX + dx * rotate[0][0] + dy * rotate[0][1])
    const ny = Math.floor(centerY + dx * rotate[1][0] + dy * rotate[1][1])
    grid[y][x] = (diamond[ny] && diamond[ny][nx]) || ' '
  }
}

console.log(grid.map((v) => v.join('')).join('\n'))
