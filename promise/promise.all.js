Promise.all = function (iterator) {
    if (!Array.isArray(iterator)) {
        return
    }

    let count = 0
    let res = []

    return new Promise((resolve, reject) => {
        for (const item of iterator) {
            Promise.resolve(item).then(data => {
                res[count++] = data
                if (count === iterator.length) {
                    resolve(res)
                }
            }).catch(e => {
                reject(e)
            })
        }
    })
}