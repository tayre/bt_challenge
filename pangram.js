// start reading from standard input
process.stdin.resume();

// convert bytes to UTF-8 characters.
process.stdin.setEncoding("utf8");

// Listen for data events, which allows us to get the data out of the stream as soon as possible
var _input = "";
process.stdin.on("data", function(input) {
	_input += input;
});

// there is no more data to read, so we can now process the input
process.stdin.on("end", function() {
	console.log(processData(_input));
});

// the main function: write to standard out the solution to the problem question, in the requested format
function processData(input) {
	var buffer = input.split('\n');
	var sentence = buffer[0].trim();

	var result = isPangram(sentence) ? 'pangram' : 'not pangram';
	return result;
}

var alphabet = {
	'a': false,
	'b': false,
	'c': false,
	'd': false,
	'e': false,
	'f': false,
	'g': false,
	'h': false,
	'i': false,
	'j': false,
	'k': false,
	'l': false,
	'm': false,
	'n': false,
	'o': false,
	'p': false,
	'q': false,
	'r': false,
	's': false,
	't': false,
	'u': false,
	'v': false,
	'w': false,
	'x': false,
	'y': false,
	'z': false,

	allTrue: function() {
		for (var key in this) {
			if (this.hasOwnProperty(key)) {
				if (!this[key]) {
					return false;
				}
			}
		}

		return true;
	}
};

function isPangram(input) {

	//iterate over input

	var character = '';

	for (var i = 0; i < input.length; i++) {
		character = (input[i].toLowerCase().trim());
		if (!alphabet[character]) {
			alphabet[character] = true;
		}

		if (alphabet.allTrue()) {
			return true;
		}
	}

	return false;

}
