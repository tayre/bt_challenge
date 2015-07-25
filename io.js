// read file into memory, so we can process it
var buffer = '';
var stdin = process.stdin;
var stdout = process.stdout;

// convert bytes to utf8 characters
stdin.setEncoding('utf8');

// start reading from standard in
process.stdin.resume();

// listen for data events, which allows us to get the data out of the stream as soon as possible
stdin.on('data', function(chunk) {
	if (chunk !== null) {
		buffer += chunk;
	}
});

// there is no more data to read, so we can now process the input
stdin.on('end', function() {
	var input = buffer.split('\r\n'); // split chunked data, by CR + LF
	var result = sumArray(input); // process the input
	printResult(result); // output the result
});

// write the elements of input to standard out
function printResult(input) {
	for (var i = 0; i < input.length; i++) {
		stdout.write(input[i] + "\n");
	}
}

// input is of the form [n, i_1, i_2, ... i_n], where each element contains space separated integers which we want to sum
function sumArray(input) {
	var operands = [];
	var result = [];
	var sum = 0;

	for (var i = 1; i < input.length; i++) {
		operands = (input[i].split(' '));
		sum = parseInt(operands[0]) + parseInt(operands[1]);
		result.push(sum);
	}

	return result;
}