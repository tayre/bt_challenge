/*	This implements a solution for the Broadway Technology Developer Test 
 *	Submitted by ayre.tom@gmail.com on 25 July 2015
 */

/*
 * Return 1 if there exists an element in arr such that the sum of the elements to its left is equal to the sum of elements to its right. Otherwise, return 0.
 * arr is of at least size 1, and at most size 10^5
 * 1<= a_i <= 10^5, for each element of arr, a_i
 */
function sumBalance(arr) {

	var leftsum = 0;
	var rightsum = 0;
	for (var i = 0; i < arr.length; i++) {

		// calculate left sum
		leftsum = sumElements(arr.slice(0, i));

		// calculate right sum
		rightsum = sumElements(arr.slice(i + 1, arr.length));

		if (leftsum === rightsum) {
			return 1;
		}

	}

	// input array does not have such an element
	return 0;
}

// helper function to return the sum of elements in input array in O(n) time.
function sumElements(input) {
	var sum = 0;
	for (var i = 0; i < input.length; i++) {
		sum += input[i];
	}
	return sum;
}
