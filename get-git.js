const download = require('download-git-repo')
const ncp = require('ncp').ncp
const rimraf = require('rimraf')

function init() {
  console.log('Cleaning up directories')
  rimraf('./temp', () => {})
  rimraf('./src/data', () => {
    downloadData()
  })
}

function downloadData() {
  console.log('Downloading Data. Please wait...')
  download(
    'direct:https://github.com/Bitcoin-com/developer.bitcoin.com.git',
    'temp',
    { clone: true },
    function(err) {
      console.log(
        err
          ? 'Error Downloading Data. Trying again in 10 seconds'
          : 'Download Success!'
      )
      if (!err) {
        move()
      } else {
        setTimeout(downloadData(), 10 * 1000)
      }
    }
  )
}

function move() {
  console.log('Copying Data, please wait')
  ncp('./temp/src/data', './src/data', function(err) {
    if (err) {
      return console.error(err)
    }
    console.log('Copying Complete')
    deleteTemp()
  })
}

function deleteTemp() {
  console.log('Deleting Temp Directory')
  rimraf('./temp', function() {
    console.log('Deleted Temp Directory')
  })
}

init()
