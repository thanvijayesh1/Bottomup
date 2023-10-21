function setParentValue(node) {
    debugger
    if (node.child && node.child.length > 0) {
        console.log(node)
      let allChildrenTrue = true;
      for (const child of node.child) {
        console.log(node)
        setParentValue(child);
        allChildrenTrue = allChildrenTrue && child.value;
      }
      console.log(node)
      node.value = allChildrenTrue;
    }
    return node; // Return the updated node
  }
  

  // Example usage:
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
        value: false,
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
            label: "Student B12",
            value: true,
            nestedValue: false,
            parentName: "sectionA",
          },
        ],
      },
    ],
  };
  const updatedData = setParentValue(data);
  console.log(updatedData);
  
  