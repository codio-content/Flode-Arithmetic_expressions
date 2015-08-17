
// Generate a random number as input0
inp0 = Math.floor( Math.random() * 10 )
inp1 = Math.floor( Math.random() * 10 )
inp2 = Math.floor( Math.random() * 10 )
result = inp0 * (inp1 + inp2)

// Call Flode
out0 = 111


// Check output
if (out0 == result) {
  console.log('Well done!!')
  process.exit(0)
}
else {
  console.log('You got this wrong! We passed values of ' + inp0 + ',  ' + inp1 + ', and ' + inp2 + ' and got an output of ' + out0 + ' instead of ' + result + '.')
  process.exit(1)
}
