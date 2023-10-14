const arr = ["Dell", "HP", "Mac", "Lenovo"]
const arr1 = [1, 2, 3, 4];
Array.prototype.myFindIndex = function (callBack) {
    console.log(this)
    for (let i = this.length; i>=0; i--) {
        if (callBack(this[i], i, this)) {
            return i
        }   
    }

    return -1
}

const newArray = arr1.myFindIndex((arr) => {
    return arr >4
})

console.log(newArray)