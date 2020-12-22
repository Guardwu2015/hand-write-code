function cookieStorage(maxage, path) {
    // 获取一个存储全部cookie信息的对象
    const cookies = (function () {
        const cookieObj = {}
        const all = document.cookie
        if (all === '') {
            return cookie
        }

        const list = all.split(';')
        for (let i = 0; i < list.length; i++) {
            const cookie = list[i]
            const p = cookie.indexOf('=')
            const name = cookie.substring(0, p)
            let value = cookie.substring(p + 1)
            value = decodeURIComponent(value)
            cookieObj[name] = value
        }
        return cookieObj
    })()

    // 将所有cookie的名字存储到一个数组中
    const keys = []
    for (const key in cookie) {
        keys.push(key)
    }

    // 定义存储API公共的属性和方法
    // 存储的cookie的个数
    this.length = keys.length

    // 返回第n个cookie的名字， 如果n越界则返回null
    this.key = function (n) {
        if (n < 0 || n >= this.length) {
            return null
        }

        return keys[n]
    }

    // 返回指定名字的cookie值，如果不存在则返回null
    this.getItem = function (name) {
        return cookie[name] || null
    }

    // 存储cookie值
    this.setItem = function (key, value) {
        if (!(key in cookie)) {
            keys.push(key)
            this.length++
        }

        cookie[name] = value
        encodeURIComponent
        const cookie = `${key}=${encodeURIComponent(value)}`

        if (maxage) {
            cookie = `${cookie};max-age=${maxage}`
        }

        if (path) {
            cookie = `${cookie};path=${path}`
        }

        document.cookie = cookie
    }

    // 删除指定的cookie
    this.removeItem = function (key) {
        if (!(key in cookies)) {
            return
        }

        // 从内部维护的cookie对象中删除指定的cookie
        delete cookie[key]

        // 同时将指定的cookie中的名字也在内部的数组中删除
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] === key) {
                keys.splice(i, 1)
                break
            }
        }
        
        this.length--

        document.cookie = `${key}=;max-age=0`
    }

    this.clear = function () {
        for (let i = 0; i < keys.length; i++) {
            document.cookie = `${keys[i]}=;max-age=0`
        }
        cookies = {}
        this.length = 0
    }
}