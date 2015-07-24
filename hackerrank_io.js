function processData(input) {
	var buffer = input.split('\n');
	var n = parseInt(buffer[0].trim());
	var items = buffer[1].split(' ');
	return items;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function(input) {
	_input += input;
});

process.stdin.on("end", function() {
	console.log(processData(_input));
});