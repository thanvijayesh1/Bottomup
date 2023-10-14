// includes check if given 

Array.prototype.myIncldues = function (array,index=0) {
  let returnArr=false
    for (let i =index; i < this.length; i++) {
        if(array==this[i]){
            returnArr=true
        }
        
    }
    return returnArr
}


// includes  method two arr
const arr = [2, 4, 6, 8]

const ret = arr.myIncldues(2,2)
console.log(ret)