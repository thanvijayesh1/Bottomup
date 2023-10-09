const onjectModify=(obj,newKeyAdd)=>{
    return{
        ...obj,
        ...newKeyAdd
    }
}

const obj={
    username:"jayesh",
    email :"jayesh@gmail.co",
    age:21
}
console.log(onjectModify(obj,{isActive:true}))