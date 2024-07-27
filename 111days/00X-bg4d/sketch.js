let vertices = []
let angle = 0

function setup() {
  createCanvas(600, 600, WEBGL)
  for (let i = 0; i < 16; i++) {
    vertices[i] = [
      (i & 1) === 0 ? -1 : 1,
      (i & 2) === 0 ? -1 : 1,
      (i & 4) === 0 ? -1 : 1,
      (i & 8) === 0 ? -1 : 1,
    ]
  }
}

function draw() {
  background(0)
  rotate4D()
  scale(200)
  stroke(255)
  noFill()
  beginShape(LINES)
  for (let i = 0; i < vertices.length; i++) {
    for (let j = i + 1; j < vertices.length; j++) {
      if (bitCount(i ^ j) === 1) {
        let v1 = project(vertices[i])
        let v2 = project(vertices[j])
        vertex(v1[0], v1[1], v1[2])
        vertex(v2[0], v2[1], v2[2])
      }
    }
  }
  endShape()
  angle += 0.001
}

function rotate4D() {
  let cosA = cos(angle)
  let sinA = sin(angle)
  for (let i = 0; i < vertices.length; i++) {
    let x = vertices[i][0]
    let y = vertices[i][1]
    let z = vertices[i][2]
    let w = vertices[i][3]
    vertices[i][0] = cosA * x - sinA * w
    vertices[i][3] = sinA * x + cosA * w
    vertices[i][1] = cosA * y - sinA * z
    vertices[i][2] = sinA * y + cosA * z
  }
}

function project(v) {
  let distance = 2
  let w = 1 / (distance - v[3])
  return [v[0] * w, v[1] * w, v[2] * w]
}

function bitCount(n) {
  let count = 0
  while (n !== 0) {
    count++
    n &= n - 1
  }
  return count
}
