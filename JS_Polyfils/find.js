Array.prototype.myFind = function (call) {
    for (let i = 0; i < this.length; i++) {
        if (call(this[i], i, this)) {
            return this[i]
        }

    }
    return null
}

const arr = [2, 3, 4, 5, 0]
const returnName = arr.myFind((item) => item == '21')
console.log(returnName)

