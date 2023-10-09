const arr = [
    {
        name: "jayesh",
        price: 100

    },
    {
        name: "other",
        price: 10

    },
    {
        name: "jayesh1",
        price: 1

    }
]
const sortingArr=()=>{
    const sort=arr.sort((item,itemb)=>{
        return item.price-itemb.price

    })
}

sortingArr()