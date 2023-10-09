Array.prototype.forEach = function (call) {
    // const returnArr = []
    for (let i = 0; i < this.length; i++) {
         call(this[i], i, this)
        // returnArr.push(values)
    }
    // return returnArr
}

const arr = [2, 4, 6, 8]
const newArr=[]
const ret = arr.forEach((item, index, Whole) => {
   newArr.push(item*2)
})
console.log(newArr)