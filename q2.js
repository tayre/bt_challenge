function processData(input) {
	var buffer = input.split('\n');
	var n = buffer[0];
	var items = buffer[1].split(' ');
    return items;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
	_input += input;
});

process.stdin.on("end", function() {
	console.log(processData(_input));
});