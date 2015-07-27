var testcases = [

	{
		input: [-7, 1, 5, 2, -4, 3, 0],
		expectedOutput: 1
	},

	{
		input: [-7, 1, 5, 2, -4, 3, 0],
		expectedOutput: 1
	},

	{
		input: [0],
		expectedOutput: 1
	},

	{
		input: [1, 1, 1],
		expectedOutput: 1
	},

	{
		input: [-3, -2, 4, -5, 0, 0, 0, 0, 5, -5],
		expectedOutput: 1
	},

	{
		input: [100, -99, 0, 0, 0, 0, 0, 0, 0, 1],
		expectedOutput: 1
	}

];

function runTest(actual, expected, testnumber) {
	var result = actual === expected ? 'test: ' + (testnumber + 1) + ' passed' : 'test: ' + (testnumber + 1) + ' failed';
	console.log(result);
}

var q1 = require('./q1.js');
console.log('\n----------------------');
console.log('O(n^2) implementation');
console.log('----------------------');

for (var i = 0; i < testcases.length; i++) {
	runTest(q1.sumBalance(testcases[i].input), testcases[i].expectedOutput, i);
}

var q1improved = require('./q1.improved.js');
console.log('\n----------------------');
console.log('O(n) implementation');
console.log('----------------------');

//run implementation 2
for (var i = 0; i < testcases.length; i++) {
	runTest(q1improved.sumBalance(testcases[i].input), testcases[i].expectedOutput, i);
}
