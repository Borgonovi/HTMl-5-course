'use strict';

var expect = require('chai').expect;
var stringUtils = require('../../index.js');

describe('test methods', function(){
	it('have method uppercase', function(){
		expect(stringUtils)
			.to.be.have.property('uppercase')
			.to.be.a('function');
	});

	it('have method lowercase', function(){
		expect(stringUtils)
			.to.be.have.property('lowercase')
			.to.be.a('function');
	});

	describe('test return values of methods', function(){
		it('should return string in lowercase', function(){
			expect(stringUtils.lowercase('Felipe Borgonovi'))
				.to.be.equal('felipe borgonovi');
			expect(stringUtils.lowercase('LOREM !!!!!'))
				.to.be.equal('lorem !!!!!');
		});
	});
});

