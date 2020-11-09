function compress (source) {
  const keys = {}

  source.replace(/([^=&]+)=([^&]+)/g,
  (full, key, value) => {
    keys[key] = (keys[key] ? `${keys[key]},` : '') + value

    return ''
  })

  const result = []

  for (let key in keys) {
    result.push(`${key}=${keys[key]}`)
  }

  return result.join('&')
}

console.log(compress('foo=1&foo=2&blah=a&blah=b&foo=3'))