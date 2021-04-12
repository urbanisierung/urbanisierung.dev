/* eslint-disable id-length */
const fs = require('fs')
// const f =
//   'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js'
const f = `node_modules/@angular-devkit/build-angular/src/webpack/configs/browser.js`

fs.readFile(f, 'utf8', (err, data) => {
  if (err) {
    return console.log(err)
  }
  let result = data.replace(
    // eslint-disable-next-line require-unicode-regexp
    /node: false/g,
    'node: {crypto: true, stream: true}',
  )

  fs.writeFile(f, result, 'utf8', (error) => {
    if (error) {
      return console.log(error)
    }
  })
})
