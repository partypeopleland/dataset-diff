var util = require('../util/index.js');
/**
 * 給予更新資料，原始資料應該要被更新
 * @param {*} source 原始資料
 * @param {*} newData 更新資料
 * @param {*} condition 識別屬性集合
 */
function updateData(source, newData, condition) {
	let result = [...source];
	let sourceList = util.convertToStrList(result, condition); //?
	let newDataList = util.convertToStrList(newData, condition); //?
	let updateList = sourceList.filter(x => newDataList.indexOf(x) > -1); //?
	if (updateList.length > 0) {
		// 替換舊資料為新資料
		let pairList = util.getPairList(sourceList, newDataList, newData, condition); //?
		pairList.forEach(pair => {
			result[pair.idx] = {
				...result[pair.idx],
				...pair.data,
			};
		});
	}
	return result;
}

module.exports = updateData;
