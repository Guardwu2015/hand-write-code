Promise.race = function (iterator) {
    return new Promise((resolve, reject) => {
        for (let item of iterator) {
            Promise.resolve(item).then(data => {
                resolve(data)
            }).catch(e => {
                reject(e)
            })
        }
    })
}