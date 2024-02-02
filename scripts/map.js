// Original array of objects
const originalArray = [
    { id: 1, name: 'Alice', age:24 },
    { id: 2, name: 'Bob', age: 56 },
    { id: 3, name: 'Charlie', age:35 }
  ];
  
  // Using map to create a new array (shallow copy) with modified names
  const newArray = originalArray.map((item) => {
    // Creating a new object with the same properties
    // return { id: item.id, name: item.name.toUpperCase(), age: item.age };
    // spread syntax creates a shallow copy
    return { ...item, name: item.name.toUpperCase() };
  });
  
  // Displaying the original and new arrays
  console.log('Original Array:', originalArray);
  console.log('New Array (shallow copy with modified names):', newArray);
  