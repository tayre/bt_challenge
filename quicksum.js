function summation_recursive(n) {
	if (n === 0) {
		return 0;
	}
	else {
		return n + summation_recursive(n - 1);
	}
}

function summation_iterative(n) {
	var count = 0;
	for (var i = 0; i <= n; i++) {
		count = count + i;
	}

	return count;
}

function summation_inplace(n) {
	return (n * (n + 1)) / 2;
}

(function main() {

	var n = 10;

	console.log(summation_recursive(n) === 55);
	console.log(summation_iterative(n) === 55);
	console.log(summation_inplace(n) === 55);

})();
