/*===============================Task1===============================*/
const arr = [10, 12, 15, 21];
for(let i = 0; i < arr.length; i++){
	setTimeout(function(){
		console.log('Index' + i + ', element: ' + arr[i]);
	}, 1000);
}

/*===============================Task2===============================*/
function makeCounter(count){
	var res = count;
	return function(){
		return ++res;
	}
}

const counter = makeCounter(1);
const counter2 = makeCounter(11);
alert(counter());
alert(counter2());


/*===============================Task3===============================*/
function isUrl(str){
	return /\w{1,}\.\w{2,}/.test(str)
}

function isDate(str){
	return /(\d{2})(\-|\.|\/)(\d{2})(\-|\.|\/)(\d{4})/.test(str);
}

function isPhoneNumber(str){
	return /\+[380]{3}[0-9]{9}/.test(str);
}
function isEmail(str){
	return /\w{3,}@\w{3,}\.\w{2,}/.test(str);
}

function composeValidators(...valid){
	return function(str){
		for(let args of valid){
			if(!args(str)){
				return false;
			}
		}
		return true;
	}
}

const v = composeValidators(isEmail);
const isV = v("adhgd@gamil.com")


/*===============================Task4===============================*/
function makeSpyOn(func){
	count.calls = 0;
	function count(){
		++count.calls;
		return func();
	}
	return count;
}
let spy = makeSpyOn(()=> {return console.log('hi')});
spy();
spy();
alert(spy.calls);

/*===============================Task5===============================*/
var calc = {
	input: function(){
		this.a = +prompt('a: ', 0);
		this.b = +prompt('b: ', 0);
	},

	sum: function(){ return this.a + this.b},
	mul: function(){ return this.a * this.b},
	sub: function(){ return this.a - this.b},
}

var calculate = {
	res: 0,
	input: function(a){this.res = a; return this},
	sum: function(a){ this.res += a; return this},
	mul: function(a){ this.res *= a; return this},
	sub: function(a){ this.res -= a; return this},
	show: function(){alert(this.res); return this}
}

calculate.input(1).mul(2).show();

/*===============================Task6===============================*/
var user = {
	name: 'John Smith',
	sayHi: function(){alert(this.name)},
	timeoutSayHi: function(){myTimeout(this.sayHi, 1000)}
};

function myTimeout(func, delay, ...params){
	var start = performance.now();
	while(performance.now() - start <= delay)
	{
		if(performance.now() - start == delay)
		{
			return func.apply(user, params);
		}
		continue;
	}
}