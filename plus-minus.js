function processData(input) {
	var buffer = input.split('\n');
	var n = parseInt(buffer[0]);
	var items = buffer[1].split(' ');

	var plusCount = 0;
	var minusCount = 0;
	var zeroCount = 0;
	var currItem = null;
	for (var i = 0; i < items.length; i += 1) {
		currItem = parseInt(items[i]);
		if (currItem > 0) {
			plusCount += 1;
		} else if (currItem < 0) {
			minusCount += 1;
		} else {
			zeroCount += 1;
		}
	}

	//output count of positive numbers, negative numbers and zeroes to the total numbers respectively correct to 3 decimal places.
	console.log(Math.floor((plusCount / n) * 1000) / 1000);
	console.log(Math.floor((minusCount / n) * 1000) / 1000);
	console.log(Math.floor((zeroCount / n) * 1000) / 1000);
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