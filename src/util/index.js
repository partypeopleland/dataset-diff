function convertToObj(source, uniqueKey, condition) {
	const myFilter = (d, prop, val) => {
		if (d[prop] === null && val === '') {
			return true;
		}
		return d[prop] == val;
	};
	let ary = uniqueKey.split('-');
	let data = [...source];
	for (let index = 0; index < ary.length; index++) {
		if (data.length > 0) {
			data = data.filter(d => myFilter(d, condition[index], ary[index]));
		}
	}
	return data.length > 0 ? data[0] : null;
}

function getPairList(sourceList, strList, data, condition) {
	return strList.map(target => {
		return {
			idx: sourceList.indexOf(target),
			data: convertToObj(data, target, condition),
		};
	});
}

function convertToStrList(source, condition) {
	const keyFilter = (x, condition) => condition.map(cond => x[cond]).join('-');
	return source.map(x => keyFilter(x, condition));
}

function getRemoveList(source, newData, condition) {
	let newDataSet = [...newData];
	let oldDataSet = source;
	let removeList = getDiff(newDataSet, oldDataSet, condition);
	return removeList;
}

function getDiff(newDataSet, oldDataSet, condition) {
	let dataSet2Ary = convertToStrList(oldDataSet, condition); //?
	let dataSet1Ary = convertToStrList(newDataSet, condition); //?
	let expect = dataSet2Ary.filter(x => dataSet1Ary.indexOf(x) === -1); //?
	let result = expect.map(uniqueKey => convertToObj(oldDataSet, uniqueKey, condition));
	result = result.filter(x => x !== null); //?
	return result;
}

module.exports = {
	getRemoveList,
	getDiff,
	convertToObj,
	convertToStrList,
	getPairList,
};
