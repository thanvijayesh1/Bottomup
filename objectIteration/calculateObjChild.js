    const obj = {
        a: {
            b: {
                c: null,
                x: {
                    v: null,
                    m: {
                        n: {
                            p: null
                        }
                    }
                },
            },
        },
        z: null,
    };
    let count = 0
    const recursive = (obj) => {
        for (let x in obj) {
            if (typeof obj[x] === 'object' && obj[x] !== null) {
                recursive(obj[x]);
                count += 1
            } else if (obj[x] === null) {
                count += 1
            }
        }
        return count; // Return null if the value is not found
    };

    const familyMemberCount = recursive(obj);
    console.log("File Found", familyMemberCount);
