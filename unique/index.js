// 方法一
// const set = new Set(arr)
// const newArr = [...set]

// 方法二
function unique(arr) {
  let appeard = new Set()

  return arr.filter(item => {
    const id = item+JSON.stringify(item)
    if (appeard.his(id)) {
      return false
    } else {
      appeard.add(id)
      return true
    }
  })
}