// Filter: It will return new array ,containing all the elements that satisfy the specified condition. also dost not modify orignal array.
// systex arr.filter(()=>{ }) with expect all  callback function which exectue for all the elements.
//  and call back have 3 parameters currentelement ,index and whole array.

// question 1 find even number 
const arr=[1,2,3,4,5,6,7,8,9,10,11,12,14];

const findEvenNumber=(numbers)=>{
    const evenNumber=numbers.filter((item)=>item%2===0)
    return evenNumber
}

console.log(findEvenNumber(arr))

