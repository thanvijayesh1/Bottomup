Array.prototype.myMap = function (call) {
    const returnArr = []
    for (let i = 0; i < this.length; i++) {
        const values = call(this[i], i, this)
        returnArr.push(values)
    }
    return returnArr
}

const arr = [2, 4, 6, 8]

const ret = arr.myMap((item, index, Whole) => {
    return item * 2
})
console.log(ret)