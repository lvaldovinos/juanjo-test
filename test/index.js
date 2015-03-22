'use strict';

var should = require('should'),
		answers = require('./../index');

describe('Javascript Test', function() {
	describe('function that reverse a number', function() {
		it('Should reverse the number 32243', function() {
			answers.reverseNo(32243).should.be.exactly(34223);
			answers.reverseNo(1234566).should.be.exactly(6654321);
			answers.reverseNo(67890).should.be.exactly(09876);
		});
	});
	describe('is palindrome?', function() {
		it('Should return true to all palindromes', function() {
			var palindromes = ['madam',
											  'nurses run',
											  'A car, a man, a maraca'];
			palindromes.forEach(function(palindrome) {
				answers.isPalindrome(palindrome).should.be.ok;
			});
		});
		it('Should return false no palindromes.', function() {
			var noPalindromes = ['noPalindrome!',
													 'nethir'];
			noPalindromes.forEach(function(noPal) {
				answers.isPalindrome(noPal).should.not.be.ok;
			});
		});
	});
	describe('Order string alphabetical', function() {
		it('Should return abeemrstw', function() {
			var words = ['webmaster',
									 'dude'],
					results = [];
			words.forEach(function(word) {
				results.push(answers.orderAlphabetical(word));
			});
			results[0].should.be.exactly('abeemrstw');
			results[1].should.be.exactly('ddeu');
		});
	});
	describe('Change string to Upper case', function() {
		it('Should return \"The Quick Brown Fox\"', function() {
			answers.toUc('the quick BROWN fox').should.be.exactly('The Quick Brown Fox');
		});
		it('Should return \"Example\"', function() {
			answers.toUc('example').should.be.exactly('Example');
		});
	});
	describe('Find longest word in a sentence', function() {
		it('Should return \"Develpoment\" from \"The Web Development Tutorial\"', function() {
			answers.findLongest('The Web Development Tutorial').should.be.exactly('Development');
		});
	});
	describe('Count vowels within sentence', function() {
		it('Should return 5 cause there are 5 vowels within \"The quick brown fox\"', function() {
			answers.countVowels('The quick brown fox').should.be.exactly(5);
		});
		it('Should return 3 cause there 3 vowels within \"ae sfdsfdfd i\"', function() {
			answers.countVowels('ae sfdsfdfd i').should.be.exactly(3);
		});
	});
	describe('Return type of variable', function() {
		it('Should return all 5 possible values', function() {
			answers.getType({}).should.be.exactly('object');
			answers.getType(true).should.be.exactly('boolean');
			answers.getType(function(){}).should.be.exactly('function');
			answers.getType(8).should.be.exactly('number');
			answers.getType('hi').should.be.exactly('string');
			answers.getType().should.be.exactly('undefined');
		});
	});
	describe('Check whether a number is prime or not', function() {
		it('Should return true all numbers are primes', function() {
			var primes = [2,3,5,7,11,13];
			primes.forEach(function(prime) {
				answers.isPrime(prime).should.be.ok;
			});
		});
		it('Should return false all numbers are not primes', function() {
			var noPrimes = [4,6,8,9,10];
			noPrimes.forEach(function(np) {
				answers.isPrime(np).should.not.be.ok;
			});
		});
	});
	describe('Get second lowest and greates number within a collection', function() {
		it('should return 2,4', function() {
			answers.secondLowGreat([1,2,3,4,5]).should.be.exactly('2,4');
		});
		it('should return 3,8', function() {
			answers.secondLowGreat([4,5,9,8,2,3]).should.be.exactly('3,8');
		});
	});
	describe('Function that gets unique characters of a string', function() {
		it('Should return \"thequickbrownfxjmpsvlazydg\"', function() {
			answers.getUniqueLetters('thequickbrownfoxjumpsoverthelazydog').should.be.exactly('thequickbrownfxjmpsvlazydg');
		});
	});
	describe('Function to Bn where B is exponent and n is the base', function() {
		it('should return 27', function() {
			answers.pow(3,3).should.be.exactly(27);
		});
	});
	describe('Get occurrences of each letter in a string', function() {
		it('Should return letter a is 2 and b 5times', function() {
			answers.getOccurrences('aabbbbb').lettera.should.be.exactly(2);
			answers.getOccurrences('aabbbbb').letterb.should.be.exactly(5);
		});
	});
});
