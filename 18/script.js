console.log('My first script');

var name = 'Vasya';
var age = 24;

console.log(age * 2);

function mul(x) {
	var y = x * 2;
	return y;
}

var result = mul(123);
console.log(result);

function fullName(firstName, lastName) {
	var result = firstName + ' ' + lastName;
	return result;
}

var myFullName = fullName('Vasya', 'Pupkin');
console.log(myFullName)

function access(age) {
	if (age >= 18) {
		return true;
	} else {
		return false;
	}
}

// console.log( access(15) )
// console.log( access(25) )
// console.log( access(10) )
// console.log( access(30) )

// var i = 0;
// while (i <= 5) {
// 	console.log(i);
// 	i = i + 1;
// }

for (var i = 0; i <= 5; i++) {
	console.log(i);
}

