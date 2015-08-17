
// Generate a random number as input0
inp0 = Math.floor( Math.random() * 100 )
inp1 = Math.floor( Math.random() * 100 )
result = inp0 / inp1
result = result.toFixed(3)

// Call Flode
out0 = 111
out0 = out0.toFixed(3)


// Check output
if (out0 == result) {
  console.log('Well done!!')
  process.exit(0)
}
else {
  console.log('You got this wrong! We passed values of ' + inp0 + ' and ' + inp1 + ' and got an output of ' + out0 + ' instead of ' + result + '.')
  process.exit(1)
}
