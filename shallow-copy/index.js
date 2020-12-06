// otherStar = {...star}

// Object.assign({}, star)

function copy(obj) {
  const result = Array.isArray(obj) ? [] : {}
  Object.keys(obj).forEach(key => result[key] = obj[key])

  return result
}