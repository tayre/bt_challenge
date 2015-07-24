function processData(input) {
	var buffer = input.split('\n');

	// first line up input is the actual due date
	var actualInput = buffer[0].split(' ');

	// second line of input is the expected due date
	var expectedInput = buffer[1].split(' ');

	// create objects to work with
	var actual = new DateObj(actualInput);
	var expected = new DateObj(expectedInput);

	// calculate the fine, as specified
	if (actual.year > expected.year) {
		return 10000;
	}

	else if (actual.year === expected.year && actual.month > expected.month) {
		return 500 * (actual.month - expected.month);
	}

	else if (actual.year === expected.year && actual.month === expected.month && actual.day > expected.day) {
		return 15 * (actual.day - expected.day);
	}

	else {
		return 0;
	}
}

// for this exercise, we are going to assume that the inputArray representing a date is of the format ['d', 'm', 'y'] where 1 <= d <= 31, 1 <= m <= 12, 1 <= y <= 3000
function DateObj(inputArray) {
	this.day = parseInt(inputArray[0].trim());
	this.month = parseInt(inputArray[1].trim());
	this.year = parseInt(inputArray[2].trim());
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
