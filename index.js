'use strict';

var answers = exports;
//question 1
answers.reverseNo = function reverseNo(no) {
	if (typeof no === 'number') {
		return parseInt(no.toString().split('').reverse().join(''), 10);
	}
	else {
		throw new Error('Not a number');
	}
};
//questino 2
answers.isPalindrome = function isPalinrome(str) {
	var aux;
	if (typeof str === 'string') {
		aux = str.split('').map(function(c) {
			return /[a-zA-Z]/.test(c) ? c.toLowerCase() : '';
		});
		//console.log(aux.join(''));
		//console.log(aux.reverse().join(''));
		return (aux.join('') == aux.reverse().join(''));
	}
	else {
		throw new Error('Not a String');
	}
};
//question 4
answers.orderAlphabetical = function orderAlphabetical(str) {
	if (typeof str === 'string') {
		return str.split('').sort().join('');
	}
	else {
		throw new Error('Not a String');
	}
};
//question 5
answers.toUc = function toUc(str) {
	var aux = 1,
			result = '';
	if (typeof str === 'string') {
		str.split('').forEach(function(letter) {
			if (aux === 1) {
				result += letter.toUpperCase();
			}
			else {	
				result += letter.toLowerCase();
				if (letter === ' ') {
					aux = 0;
				}
			}
			aux += 1;
		});
		return result;
	}
	else {
		throw new Error('Not a String');
	}
};

//question 6
answers.findLongest = function findLongest(str) {
	var aux;
	if (typeof str === 'string') {
		aux = str.split(' ');
		aux = aux.map(function(word) {
			return { len : word.length,
							 word : word };
		}).sort(function(a, b) {
			return a.len - b.len;
		});
		return aux[aux.length - 1].word;
	}
	else {
		throw new Error('Not a String');
	}
};

//question 7
answers.countVowels = function countVowels(str) {
	if (typeof str === 'string') {
		return str.split(/[^aeiou]/).join('').length;
	}
	else {
		throw new Error('Not a String');
	}
};

//question 8
answers.isPrime = function isPrime(num) {
	var results = {};
	if (typeof num === 'number') {
		for( var i = 1; i <= num; i+= 1) {
			if (num % i === 0) {
				results['p'+i] = i;
			}
		}
		if (('p'+num in results) && ('p1' in results) && (Object.keys(results).length === 2)) {
			return true;
		}
		else {
			return false;
		}
	}
	else {
		throw new Error('Not a Number');
	}
};
//question 9
answers.getType = function getType(v) {
	return (typeof v);
};
//question 11
answers.secondLowGreat = function secondLowGreat(numbers) {
	if (typeof numbers.forEach === 'function') {
		numbers.sort(function(a, b) {
			return a - b;
		});
		return numbers[1] + ',' + numbers[numbers.length  - 2];
	}
	else {
		throw new Error('Not an Array');
	}
};

//question 15
answers.pow = Math.pow;

//question 16
answers.getUniqueLetters = function getUniqueLetters(str) {
	var result = {},
			aux = '';
	if (typeof str === 'string') {
		str.split('').forEach(function(c) {
			result[c] = c;
		});
		for (var i in result) {
			if (result.hasOwnProperty(i)) {
				aux += result[i];
			}
		}
		return aux;
	}
	else {
		throw new Error('Not a String');
	}
};
//question 17
answers.getOccurrences = function getOcurrences(str) {
	var result = {};
	if (typeof str === 'string') {
		str.split(/\s*/).forEach(function(w) {
			if (result['letter' + w]) {
				result['letter' + w] += 1;
			}
			else {
				result['letter' + w] = 1;
			}
		});
		return result;
	}
	else {
		throw new Error('Not a String');
	}
};
