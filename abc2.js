// Load testing framework
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

// Set up inputs and expected result
var a = Math.floor(Math.random() * 10 )
var b = Math.floor(Math.random() * 10 )
var c = Math.floor(Math.random() * 10 )
res = a * (b + c/3)
var expected = Math.round(res*1000)/1000

// Call chart
var output = testing.RunGraphWithInputs('abc2.flode', [a, b, c])
output[0] = Math.round(output[0]*1000)/1000

// Check for no output
if (output.length == 0) {
  console.log('Your chart did not output any results.')
  process.exit(1)
}

// Evaluate
if (output[0] === expected) {
  console.log('Well done!');
  process.exit(0);
}
else {
  console.log('You got this wrong! We passed in ' + a + ', ' + b + ' and ' + c + ' and got an output of ' + output[0] + ' instead of ' + expected + '.')
  process.exit(1)
}

