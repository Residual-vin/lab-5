'use strict'
function array() {
	const values = []
	function get(index) {
		return values[index]
	}
	get.push = function(value) {
		values.push(value)
	}
	get.pop = function() {
		return values.pop()
	}
	return get
}
const arr = array()
arr.push('first')
arr.push('second')
arr.push('third')
console.log(arr(0))
console.log(arr(1))
console.log(arr(2))
console.log(arr.pop())
console.log(arr.pop())
console.log(arr.pop())
console.log(arr.pop())
