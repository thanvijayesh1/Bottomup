/* Call:
Function borrowing 



*/

const obj={
    name:"jayesh",
    class:"6"
}
const obj2={
    name:"Student",
    class:"6"
}
function getValue(){
    console.log(this)
}

Function.prototype.myCall=function(obj={}, ...args){
    if(this!=="function"){
        // throw ("")
    }
    obj.fn=this
    obj.fn(args)
    console.log(this,obj,args)
}

getValue.myCall(obj2,"ok")