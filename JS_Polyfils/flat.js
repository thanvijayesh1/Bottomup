const arr1 = [1, 2, [3, 4]];
// console.log(arr1.flat());
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
// console.log(arr2.flat(2));
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
// console.log(arr3.flat(2));
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(arr4.flat(Infinity));


Array.prototype.MyFlat = function (level = 1) {
    const myF = (o, lev = 0, arr = []) => {
        for (let i = 0; i < o.length; i++) {
            if (Array.isArray(o[i]) && level > lev) {
                myF(o[i], lev + 1, arr);
            } else {
                arr.push(o[i]);
            }
        }
        return arr;
    };
    return myF(this);
}

const returnArr = arr4.MyFlat(3)


console.log(returnArr)