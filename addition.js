// Load testing framework
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

// Set up inputs and expected result
var a = Math.floor(Math.random() * 100) + 100
var expected = a + 12

// Call chart
var output = testing.RunGraphWithInputs('addition.flode', [a])

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
  console.log('You got this wrong! We passed a value in of ' + a + ' and got an output of ' + output[0] + ' instead of ' + expected + '.')
  process.exit(1)
}