
/*===========================FizzBuzz===========================*/
for(var i = 1; i <= 100; i++){
	if(i % 5 === 0 && i % 3 === 0){
		console.log(i + "fizzbuzz")
	}
	else if (i % 5 === 0){
		console.log(i + "buzz")
	}else if (i % 3 === 0 ){
		console.log(i + "fizz")
	}
	else{
		console.log(i);
	}

}
/*===========================Task1===========================*/
var a = "abcd";
function reverse(arr){
	var arr = string.split('');
	var newarr = [];
	for(var i = arr.length - 1, j = 0; i >= 0, j < arr.length; i--, j++){
		newarr[j] = arr[i];
	}
	return newarr.join('');
}

console.log(reverse(a));

function ucFirst(string){
	var arr = string.split('');
	var newlet = arr[0];
	arr[0] = newlet.toUpperCase();
	return arr.join('');;
}

console.log(ucFirst(a));

function ucWords(str){
	var word = str.split(' ');
	var arr = [];
	for(var i = 0; i < word.length; i++){
		arr.push(ucFirst(word[i]));
	}
	return arr.join(' ');
}
console.log(ucWords('abc sdf ghj'));

function isEmail(str){
	return /\w{3,}@\w{3,}\.\w{2,}/.test(str);
}

function isUrl(str){
	return /\w{1,}\.\w{2,}/.test(str)
}

function isDate(str){
	return /(\d{2})(\-|\.|\/)(\d{2})(\-|\.|\/)(\d{4})/.test(str);
}

function isPhoneNumber(str){
	return /\+[380]{3}[0-9]{9}/.test(str);
}

/*===========================Task3===========================*/

function findArray(arr1, arr2){
	var newarr = [];
	for(var i = 0; i < arr2.length; i++){
		newarr.push(arr1[arr2[i]]);
	}
	return newarr;
}
console.log(findArray([1, 2, 3, 4, 5], [0, 2, 3]));


function avgLength(arr){
	var newarr = [];
	var sum = 0, avg;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i].length;
	}
	
	avg = Math.round(sum/arr.length);

	for(var i = 0; i < arr.length; i++){
		if(arr[i].length >= avg){
		newarr.push(arr[i].slice(0, avg));
		}else{
			var char = arr[i].charAt(0);
			for(var j = 0; j < (avg - arr[i].length); j++){
				arr[i] += char;
			}
			newarr.push(arr[i]);
		}
	}
	return newarr;
}

console.log(avgLength(['qq', 'a','v']))


