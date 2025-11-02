const fs = require('fs')

fs.readFile('./input.txt', 'utf-8', (err, data1) => {
  fs.readFile(`./${data1}.txt`, 'utf-8', (err, data2) => {
    fs.readFile('./append.txt', 'utf-8', (err, data3) => {
      fs.writeFile('./output.txt', `${data1} ${data2} ${data3}`, (err) => {
        console.log('Wrote to output.txt')
        console.log(`${data1} ${data2} ${data3}`)
      })
    })
  })
})
