const bookList=[
    {
        title:"Clouser",
        author:"Virat"
    },
    {
        title:"Prototype",
        author:"Rohit"
    },
    {
        title:"Event_Loop",
        author:"Rahul"
    }
]

const findSpecficBook=()=>{
    const detail=bookList.find((item)=>item.title==="Event_Loop")
    return detail

}
console.log(findSpecficBook(bookList))