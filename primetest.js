function isprime(n) {

	if (n <= 1) {
		return false;
	}

	if (n % 2 === 0) {
		return false;
	}

	for (var i = 3; i <= Math.sqrt(n); i++) {
		if (n % i == 0) return false;
	}

	return true;
}

console.log(isprime(7));
console.log(isprime(9));
console.log(isprime(17));