const fs = require('fs')

fs.readFile('./input.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading input.txt:', err)
    return
  }

  console.log(data)

  const textOutput = `Hello: ${data.toUpperCase()} NOW: ${Date.now()}`
  fs.writeFile('./output.txt', textOutput, (err) => {
    if (err) {
      console.error('Error writing output.txt:', err)
      return
    }
    console.log('Wrote to output.txt')
    console.log(textOutput)
  })
})
