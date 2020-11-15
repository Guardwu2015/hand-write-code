function isVisible(el) {
    const pos = el.getBoundingClientRect()
    const winHeight = document.documentElement.clientHeight

    // 顶部边缘可见
    const topVisivle = pos.top > 0 && pos.top < winHeight
    // 底部边缘可见
    const bottomVisible = position.bottom < winHeight && position.bottom > 0

    return topVisivle || bottomVisible
}

function imageLazyLoad() {
    const images = document.querySelectorAll('img')
    for (let img of images) {
        const realSrc = img.dataset.src
        if (!realSrc) continue
        if (isVisible(img)) {
            img.src = realSrc
            img.dataset.src = ''
        }
    }
}