function objectFlat(obj = {}) {
    const res = {}
    function _flat(item, preKey = '') {
        Object.entries(item).forEach(([key, val]) => {
            const newKey = preKey ? `${preKey}.${key}` : key
            if (val && typeof val === 'object') {
                _flat(val, newKey)
            } else {
                res[newKey] = val
            }
        })
    }
    _flat(obj)
    return res
}

const source = {
    a: {
        b: {
            c: 1,
            d: 2
        },
        e: 3
    },
    f: {
        g: 2
    }
}
console.log(objectFlat(source));