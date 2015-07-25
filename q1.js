function processData(input) {
	var buffer = input.split('\n');
	var n = parseInt(buffer[0].trim());
	var items = buffer[1].split(' ');
	return items;
}

// start reading from standard in
process.stdin.resume();

// convert bytes to ascii characters - typically I would UTF-8 encode, but this was the hackerrank setup
process.stdin.setEncoding("ascii");

var _input = "";
// listen for data events, which allows us to get the data out of the stream as soon as possible
process.stdin.on("data", function(input) {
	_input += input;
});

// there is no more data to read, so we can now process the input
process.stdin.on("end", function() {
	console.log(processData(_input));
});
