export function deepCopy(obj) { 
    const result = {}; 
    if (typeof obj !== "object" ||  
        typeof obj === undefined ||  
        obj === null ||  
        Array.isArray(obj) ||  
        typeof obj == "function") { 
        return obj; 
    } 
    const keys = Object.keys(obj); 
    for (let key in keys) { 
        result[keys[key]] = deepCopy(obj[keys[key]]) 
    } 
    return result; 
  } 

export  const updateChildValuesByParentLabel = (data, condition, newValue,isConditionIsMatch) => {
    if (data.label === condition.label||isConditionIsMatch===true) {
      data.value=newValue
      if (data.child) {
        data.child.forEach((child) => {
          child.value = newValue;
          updateChildValuesByParentLabel(child, child.label, newValue,isConditionIsMatch=true); // Recursively update child's children
        });
      } else {
        data.value = newValue; // Update the value property for objects without children
      }
    } else if (data.child) {
      data.child.forEach((child) => {
        updateChildValuesByParentLabel(child, condition, newValue,isConditionIsMatch);
      });
    }
    return data; // Return the updated data
  };

  export function setParentValue(node) {
    if (node.child && node.child.length > 0) {
      let allChildrenTrue = true;
      for (const child of node.child) {
        setParentValue(child); 
        allChildrenTrue = allChildrenTrue && child.value;
      }
      node.value = allChildrenTrue;
    }
    return node; // Return the updated node
  }