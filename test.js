const fs = require('fs')
const http = require('http')
const url = require('url')
//file

//server
const server = http
  .createServer((req, res) => {
    console.log('Request URL:', req.url)
    res.writeHead(200, { 'Content-Type': 'text/plain' })

    res.end('Hello World\n')
  })
  .listen(3000, () => {
    console.log('Server running at http://localhost:3000/')
  })

/* fs.readFile('./input.txt', 'utf-8', (err, data1) => {
  if (err) {
    console.error('Error reading input.txt:', err)
    return
  }
  fs.readFile(`./${data1}.txt`, 'utf-8', (err, data2) => {
    fs.readFile('./append.txt', 'utf-8', (err, data3) => {
      fs.writeFile('./output.txt', `${data1} ${data2} ${data3}`, (err) => {
        console.log('Wrote to output.txt')
        console.log(`${data1} ${data2} ${data3}`)
      })
    })
  })
})
 */
