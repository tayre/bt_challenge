function processData(input) {
	var buffer = input.split('\n');
	var items = buffer[1].split(' ');
	var sum = 0;
	
	for (var i = 0; i < items.length; i++) {
		sum += parseInt(items[i].trim());
	}

	return sum;
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