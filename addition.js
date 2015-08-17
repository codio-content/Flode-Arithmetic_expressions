
// Generate a random number as input0
inp0 = Math.floor( Math.random() * 100 )
result = inp0 + 12

// Load .flode file
out = testFlode('addition.flode', [inp0])

// Call Flode
out[0] = 111

// Check output
if (result) {
  console.log('Well done!!')
  process.exit(0)
}
else {
  console.log('You got this wrong! We passed a value in of ' + inp0 + ' and got an output of ' + out0 + ' instead of ' + result + '.')
  process.exit(1)
}
