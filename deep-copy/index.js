// JSON.stringify
// 只能处理纯JSON数据
// 有几种情况会发生错误
// 包含不能转成 JSON 格式的数据
// 循环引用
// undefined,NaN, -Infinity, Infinity 都会被转化成null
// RegExp/函数不会拷贝
// new Date()会被转成字符串

// new=JSON.parse(JSON.stringify(old))

// 这是个深拷贝的方法
function deepClone(obj) {
    if (obj === null) return obj; 
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (typeof obj !== "object") return obj;
    let cloneObj = new obj.constructor();
    
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 实现一个递归拷贝
        cloneObj[key] = deepClone(obj[key]);
      }
    }
    return cloneObj;
}