const data = {
    label: "Class 9th",
    value: true,
    nestedValue: false,
    name: "class9",
    child: [
      {
        label: "section A",
        name: "sectionA",
        value: false,
        parentName: "class9",
        nestedValue: false,
        child: [
          {
            label: "Student A",
            value: true,
            nestedValue: false,
            parentName: "sectionA",
          },
          {
            label: "Student B",
            value: true,
            nestedValue: false,
            parentName: "sectionA",
          },
        ],
      },
      {
        label: "section B",
        name: "sectionb",
        value: true,
        parentName: "class9",
        nestedValue: false,
        child: [
          {
            label: "Student A",
            value: true,
            nestedValue: false,
            parentName: "sectionb",
          },
          {
            label: "Student B",
            value: true,
            nestedValue: false,
            parentName: "sectionA",
          },
        ],
      },
    ],
  };
  
//   function updateParentValue(node) {
//     // console.log("node",node)
//     if (node.child && node.child.length > 0) {
//       let allChildrenTrue = true;
//       let anyChildHasTrueNestedValue = false;
  
//       node.child.forEach((childNode) => {
//         const { value, nestedValue } = updateParentValue(childNode);
//         // console.log("node",value,childNode)
//         allChildrenTrue = allChildrenTrue && value;
//         anyChildHasTrueNestedValue = anyChildHasTrueNestedValue || nestedValue;
//       });
  
//       // Update the current node's value based on child nodes
//       node.value = allChildrenTrue;
//       node.nestedValue = anyChildHasTrueNestedValue;
//     }
  
//     return { value: node.value, nestedValue: node.nestedValue };
//   }
function updateParentValue(node) {
    if (node.child && node.child.length > 0) {
      let allChildrenTrue = true;
      let anyChildHasTrueNestedValue = false;
  
      const updatedChildNodes = node.child.map((childNode) => {
        const { value, nestedValue } = updateParentValue(childNode);
        allChildrenTrue = allChildrenTrue && value;
        anyChildHasTrueNestedValue = anyChildHasTrueNestedValue || nestedValue;
        return { ...childNode, value, nestedValue };
      });
  
      // Update the current node's value based on child nodes
      const updatedNode = { ...node, value: allChildrenTrue, nestedValue: anyChildHasTrueNestedValue, child: updatedChildNodes };
      return updatedNode;
    }
  
    return { ...node };
  }
  // Update parent values based on child values
console.log(updateParentValue(data));
  
//   console.log(data);
  