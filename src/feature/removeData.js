var util = require('../util/index.js');

/**
 * 原始資料應移除刪除名單的資料
 * @param {*} source 原始資料
 * @param {*} removeData 刪除清單
 * @param {*} condition 識別屬性集合
 */
function removeData(source, removeData, condition){
    let result = [...source]
    let removeList = util.getRemoveList(source, removeData, condition);``
    removeList.forEach(item => {
        let removeIndex = result.findIndex(
            d =>
                d.id === item.id &&
                d.name === item.name
        );
        if (removeIndex >= 0) {
            result.splice(removeIndex, 1);
        }
    });
    return result;
}

module.exports = removeData;