const arr = ["Dell", "HP", "Mac", "Lenovo"]
const arr1 = [1, 2, 3, 4];
Array.prototype.myFindLast = function (callBack) {
    console.log(this)
    for (let i = this.length; i>=0; i--) {
        if (callBack(this[i], i, this)) {
            return this[i]
        }   
    }

    return null
}

const newArray = arr1.myFindLast((arr) => {
    return arr >2
})

console.log(newArray)