const arr = ["Dell", "HP", "Mac", "Lenovo"]

Array.prototype.myFindIndex = function (callBack) {
    console.log(this)
    for (let i = 0; i < this.length; i++) {
        if (callBack(this[i], i, this)) {
            return i
        }   
    }

    return -1
}

const newArray = arr.myFindIndex((arr) => {
    return arr === "Lenovo"
})

console.log(newArray)