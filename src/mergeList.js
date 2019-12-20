function mergeList(originDataSet, newData, condition) {
    let source = [...originDataSet]

    let sourceList = convertToStrList(source, condition); //?
    let newDataList = convertToStrList(newData, condition); //?
    // 取得需要更新的資料key值

    // 是否需要更新資料
    let updateList = sourceList.filter(x => newDataList.indexOf(x) > -1); //?
    if (updateList.length > 0) {
        // 替換舊資料為新資料
        let pairList = getPairList(sourceList, newDataList, newData, condition); //?
        pairList.forEach(pair => {
            source[pair.idx] = {
                ...source[pair.idx],
                ...pair.data
            }
        })
    }

    // 是否需要新增資料
    let insertList = newDataList.filter(x => !sourceList.includes(x)) //?
    if (insertList.length > 0) {
        insertList.forEach(uniqueKey => {
            let newItem = convertToObj(newData, uniqueKey, condition) //?
            source.push(newItem)
        })
    }

    return source

}

function getPairList(sourceList, strList, data, condition) {
    return strList.map(target => {
        return {
            idx: sourceList.indexOf(target),
            data: convertToObj(data, target, condition)
        }
    })
}

/**
 * convert object list to string list by condition
 */
function convertToStrList(source, condition) {
    const keyFilter = (x, condition) => condition.map(cond => x[cond]).join('-');
    return source.map(x => keyFilter(x, condition));
}

/**
 * convert uniqueKey to object by condition
 */
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


module.exports = mergeList;