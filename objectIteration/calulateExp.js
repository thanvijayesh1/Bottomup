const obj1={
    food:3,
    rent:6,
    pertorl:10,
    clothes:10
}

const calculateSum=(obj)=>{
    let sum=0
    for (const [key, value] of Object.entries(obj)) {
        sum+=value
      }
      return sum
}
console.log(calculateSum(obj1))