/**
 * Provide two sets of collection and comparison conditions, and return the difference data
 * @param {*} param0 two sets of collection
 * @param {*} condition comparison conditions like ['id','tag']
 * @return {*} difference data
 */
function getDiff([dataSet1, dataSet2], condition) {
	let set1 = dataSet1.length > dataSet2.length ? dataSet2 : dataSet1;
	let set2 = dataSet1.length > dataSet2.length ? dataSet1 : dataSet2;

	const keyFilter = (x, condition) => condition.map(cond => x[cond]).join('-');

	let dataSet2Ary = set2.map(x => keyFilter(x, condition)); //?
	let dataSet1Ary = set1.map(x => keyFilter(x, condition)); //?
	let expect = dataSet2Ary.filter(x => dataSet1Ary.indexOf(x) === -1); //?

	let result = expect.map(e => {
		const myFilter = (d, prop, val) => {
			if (d[prop] === null && val === '') {
				return true;
			}
			return d[prop].toString() === val;
		};
		let ary = e.split('-');
		let data = [...set2];
		for (let index = 0; index < ary.length; index++) {
			if (data.length > 0) {
				data = data.filter(d => myFilter(d, condition[index], ary[index]));
			}
		}
		return data.length > 0 ? data[0] : null;
	});
	result = result.filter(x => x !== null); //?
	return result;
}
module.exports = getDiff;
