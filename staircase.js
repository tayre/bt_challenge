function processData(input) {
	var buffer = input.split('\n');
	var n = parseInt(buffer[0].trim());

	printStairCase(n);
}

// 1 <= n <= 100
function printStairCase(n) {
	for (var i = n - 1; i >= 0; i--) {
		console.log(printSpaces(i) + printStairs(n - i));
	}
}

function printSpaces(num) {
	return printItem(num, ' ');
}

function printStairs(num) {
	return printItem(num, '#');
}

function printItem(num, char) {
	var result = [];
	for (var i = 0; i < num; i++) {
		result.push(char);
	}
	return result.join('');
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function(input) {
	_input += input;
});

process.stdin.on("end", function() {
	processData(_input);
});