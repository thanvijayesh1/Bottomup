const recursiveObject = {
    a: {
        b: {
            c: "one",
            p: "two"
        }
    }
}

const recursive = (obj,key,value) => {
    for (let x in obj) {
        if (typeof obj[x] === 'object' && obj[x] !== null) {
            obj[x] = recursive(obj[x],key,value);
        } else {
            if (x === key) {
                obj[x] = value
            } 
        }
    }
    return obj;
};
console.log(recursive(recursiveObject,"c","Jayesh"))