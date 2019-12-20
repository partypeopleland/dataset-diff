var mocha = require('mocha');
var chai = require('chai');
chai.should();

var tool = require('../../src/index.js');

describe('removeData()', () => {
	it('原始資料應移除刪除名單的資料', () => {
		let condition = ['id', 'name'];
		let source = [
			{ id: 1, name: 'art', status: 'sleep' },
			{ id: 2, name: 'mary', status: 'sleep' },
			{ id: 3, name: 'joe', status: 'sleep' },
		];
		let removeData = [
			{ id: 1, name: 'art', status: 'jump' },
			{ id: 2, name: 'mary', status: 'jump' },
		];
		let expected = [
			{ id: 1, name: 'art', status: 'sleep' },
			{ id: 2, name: 'mary', status: 'sleep' },
		];
		let result = tool.removeData(source, removeData, condition);
		result.should.be.deep.equal(expected);
	});
});
