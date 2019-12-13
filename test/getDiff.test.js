const mocha = require('mocha');
const chai = require('chai');
chai.should();

const tool = require('../src/index.js');
const original = [
	{ id: 1, tag: 'apple', score: 71, age: 18 },
	{ id: 2, tag: 'apple', score: 71, age: 18 },
	{ id: 3, tag: 'apple', score: 71, age: 18 },
	{ id: 4, tag: 'apple', score: 71, age: 18 },
];
const condition = ['tag', 'id'];
const testCaseDataSet = [
	{ a: 2, b: 1, expected: 1 },
	{ a: 2, b: 2, expected: 0 },
	{ a: 2, b: 3, expected: 1 },
	{ a: 2, b: 4, expected: 2 },
	{ a: 4, b: 4, expected: 0 },
	{ a: 4, b: 3, expected: 1 },
	{ a: 4, b: 2, expected: 2 },
	{ a: 4, b: 1, expected: 3 },
	{ a: 4, b: 0, expected: 4 },
];
describe('取得差異資料', () => {
	testCaseDataSet.forEach(testCase => {
		it(`資料集為 ${testCase.a} 筆及 ${testCase.b} 筆，差異為 ${testCase.expected} 筆資料`, () => {
			let dataSet1 = original.filter(x => x.id <= testCase.a);
			let dataSet2 = original.filter(x => x.id <= testCase.b);

			let result = tool.getDiff([dataSet1, dataSet2], condition);
			let actual = result.length;
			actual.should.be.deep.equal(testCase.expected);
		});
	});
});
