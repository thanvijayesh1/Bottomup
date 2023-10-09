

const obj = {
    a: {
      b: {
        c: 1,
      },
      l: 2,
    },
  };
  
  const recursive = (obj, prefix1 = '') => {
    let flattenObj = {};
    for (let x in obj) {
      if (typeof obj[x] === 'object' && obj[x] !== null) {
        let prefix = prefix1.length > 0 ? `${prefix1}.${x}` : x;
        const result = recursive(obj[x], prefix);
        flattenObj = { ...flattenObj, ...result };
      } else {
        flattenObj[`${prefix1}.${x}`] = obj[x];
      }
    }
  
    return flattenObj;
  };
  
  const flattenedObject = recursive(obj, "");
  
  console.log(flattenedObject);