const chokidar = require('chokidar')
const watcher = chokidar.watch(process.env.PWD + '/api')
const path = require('path')

let node 

function run() {
  const { spawn } = require('child_process')
  node = spawn('node', [path.resolve(__filename, '../../bin/run.js')])
  
  node.stdout.on('data', (data) => {
    console.log(`${data}`)
  })
  
  node.stderr.on('data', (data) => {
    console.error(`${data}`)
  })
  
  node.on('close', (code) => {
    console.log(`exited with code ${code}`)
  })
}

module.exports = () => {
  run ()

  watcher.on('ready', function() {
    watcher.on('all', function() {
      node.kill('SIGINT')
      console.log('detected')
      run()
    })
  })  
}