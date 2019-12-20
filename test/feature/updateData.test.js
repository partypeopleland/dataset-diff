var mocha = require('mocha');
var chai = require('chai');
chai.should();

var tool = require('../../src/index.js');

describe('updateData()', () => {
	it('給予更新資料，原始資料應該要被更新', () => {
		let condition = ['id', 'name'];
		let source = [
			{ id: 1, name: 'art', status: 'sleep' },
			{ id: 2, name: 'mary', status: 'sleep' },
			{ id: 3, name: 'joe', status: 'sleep' },
		];
		let newData = [
			{ id: 1, name: 'art', status: 'jump' },
			{ id: 2, name: 'mary', status: 'jump' },
		];
		let expected = [
			{ id: 1, name: 'art', status: 'jump' },
			{ id: 2, name: 'mary', status: 'jump' },
			{ id: 3, name: 'joe', status: 'sleep' },
		];
		let result = tool.updateData(source, newData, condition);
		result.should.be.deep.equal(expected);
	});
});
