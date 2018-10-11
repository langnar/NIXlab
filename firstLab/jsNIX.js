
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
/*===========================Ex1===========================*/
var a = "abcd";
function rev(arr){
	var arr = string.split('');
	var newarr = [];
	for(var i = arr.length - 1, j = 0; i >= 0, j < arr.length; i--, j++){
		newarr[j] = arr[i];
	}
	return newarr.join('');
}

console.log(rev(a));

function upper(string){
	var arr = string.split('');
	var newlet = arr[0];
	arr[0] = newlet.toUpperCase();
	return arr.join('');;
}

// console.log(upper(a));

function upperWord(str){
	var word = str.split(' ');
	var arr = [];
	for(var i = 0; i < word.length; i++){
		arr.push(upper(word[i]));
	}

	return arr.join(' ');
}
console.log(upperWord('abc sdf ghj'));

/*===========================Ex3===========================*/
function findArray(arr1, arr2){
	var newarr = [];
	for(var i = 0; i < arr2.length; i++){
		newarr.push(arr1[arr2[i]]);
	}
	return newarr;
}

console.log(findArray([1, 2, 3, 4, 5], [0, 2, 3]));
