function recursionFlat(arr = []) {
    const res = []

    arr.forEach(item => {
        if (Array.isArray(item)) {
            res.push(...recursionFlat(item))
        } else {
            res.push(item)
        }
    })
    return res
}

function reduceFlat(arr = []) {
    return arr.reduce((res, item) => res.concat(Array.isArray(item) ? reduceFlat(item) : item), [])
}

function flat(arr, num = 1) {
    return num > 0 ?
        arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flat(cur, num - 1) : cur), []) :
        arr.slice()
}

// 测试
const source = [1, 2, [3, 4, [5, 6]], '7']
console.log(recursionFlat(source))
console.log(reduceFlat(source))

(() => {
    //题目中给的测试数据
    let sourceArr = [
        [0],
        [2, 3, 4], 1, [1, [2, 3]]
    ];
    //结果数组，用来保存最终输出的数据
    let resultArr;

    (function doFunc(arr) {
        resultArr = arr.toString().split(","); //利用toString和split取巧得到扁平数组
        resultArr = resultArr.map(item => Number(item)); //将数组项由字符串转换为数字
    })(sourceArr);
})();

