const obj = {
    a: {
      b: {
        c: "jayesh1",
      },
      l: 2,
    },
  };
  
  const recursive = (obj, name, prefix1 = '') => {
    let prefix = '';
    let str=''
    for (let x in obj) {
      if (typeof obj[x] === 'object' && obj[x] !== null) {
        prefix = prefix1.length > 0 ? `${prefix1}/${x}` : x;
           const result=  recursive(obj[x], name, prefix);
           console.log("result",result)
          //  if(result){
            return result 
          //  }
      } else if (obj[x] === name) {
        return`${prefix1}/${x}`;
      }
    }
    return null; // Return null if the value is not found
  };
  
  const flattenedObject = recursive(obj, "jayesh1", "");
  
  if (flattenedObject !== null) {
    console.log("File Found", flattenedObject);
  } else {
    console.log("File not found!");
  }
  