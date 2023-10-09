const obj1 = {
    a: {
        b: "jayesh"
    }
}

const obj2 = {
    a: {
        b: "jayesh"
    }
}


const depCompare = (obj1, obj2) => {
    if (Object.is(obj1, obj2)) {
        return true
    }


    const sourceKeys = Object.keys(obj1)
    const targetKeys = Object.keys(obj2)
    if (sourceKeys.length !== targetKeys.length) {
        return false;
    }

    return sourceKeys.every((key) => {
        const val1 = obj1[key]
        const val2 = obj2[key]
        if (typeof val1 === "object" && typeof val2 === "object") {
            return depCompare(val1, val2)
        } return val1 === val2;

    })


}

console.log(depCompare(obj2, obj1))