#!/usr/bin/env node

const availableInput = ['init', 'watch']
const input = process.argv[2]

if (availableInput.includes(input)) {
  if (input === 'init') {
    require('./init')()
  } else if (input === 'watch') {
    require('./watch')()
  }
} else {
  throw Error(input + ' option not found')
}