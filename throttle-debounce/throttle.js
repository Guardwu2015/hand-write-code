const throttle = function(fn, delay) {
  const timer = null

  return function() {
    const ctx = this
    const args = arguments

    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(ctx, args)
        timer = null
      }, delay)
    }
  }
}