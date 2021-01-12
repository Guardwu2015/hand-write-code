function debounce(fn, delay) {
  let timer = null

  return function() {
    const ctx = this
    const args = arguments

    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(ctx, args)
    }, delay)
  }
}