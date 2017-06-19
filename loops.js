/*

for loop structure:

  for ([initialization]; [condition]; [iteration]) {
    [loop body]
  }

  [initialization]: an expression or variable declaratio; typically used to initialize a counter variable. This expression may optionally declare new variables with the var keyword.

  [condition]: an expression evaluated before each loop iteration. If this expression evaluates to true, statement is executed.

  [iteration]: a statement executed at the end of each iteration. Typically, this will involve incremeneting or decrementing a counter, bringing the loop ever closer to its end.

  [loopBody]: code which runs on every iteration as long as the condition evaluates to true.

*/

var array = []

function forLoop(array) {
	for (var i = 0; i < 25; i++) {
		if (i === 1) {
			array.push("I am 1 strange loop.")
		} else {
			array.push(`I am ${i} strange loops.`)
		}
	}
	return array
}

function whileLoop(n) {
  while (n != 0) {
  	console.log(n)
    n = n - 1
  }
	return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
	do {
		array.pop()
	} while (array.length > 0 && maybeTrue());
	return array
}
