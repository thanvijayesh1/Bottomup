const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = 1;
let fruit = fruits.at(index);
// console.log(fruits.at(-1))


// when to use at and normal array access?

Array.prototype.myAt = function (index) {
   console.log(index)
   if (index >= 0) {
      return this[index]
   }else{   
      return this[this.length+index]
   }

}

const myReturn = fruits.myAt(index)
console.log(myReturn)