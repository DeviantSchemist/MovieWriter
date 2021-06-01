const fs = require('fs')

let movie1 = process.argv[2], movie2 = process.argv[3], movie3 = process.argv[4]
fs.writeFile('movies.txt', movie1+movie2+movie3, err => {
  if (err) {
    console.error(err)
  }
  console.log('File written to successfully!')
})