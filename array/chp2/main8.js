// Indirect recursion 

function isEven(n) {
	if (n === 0) {
		return true
	}
	if (n < 0) {
		return isEven(-n)
	}
	return isOdd(n - 1)
}

function isOdd(n) {
	if (n === 0) {
		return false
	}
	if (n < 0) {
		return isOdd(-n)
	}
	return isEven(n - 1)
}

console.log(isEven(10))  // true
console.log(isOdd(7))    // true
console.log(isEven(0))   // true
console.log(isOdd(0))    // false
console.log(isOdd(-3))   // true

