function universeAnswer() {
  for (let i = 0; i < 42; i++) {
    console.log('The answer is 42')
  }
  if (true) {
    console.log('The answer is 42')
  }

  const b = () => {
    console.log('The answer is 42')
  }

  return 'The answer is 42'
}
console.log(universeAnswer())
