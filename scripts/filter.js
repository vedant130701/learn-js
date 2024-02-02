// Original array of objects
const people = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Miriam' },
    { id: 3, name: 'Aditya' },
    { id: 4, name: 'Malcolm' },
    { id: 5, name: 'Zhi' }
  ];
  
  // Character or substring to search for at the beginning of the name
  const startsWithChar = 'A';
  
  // Using filter to create a new array with objects where the name starts with the specified character
  const filteredPeople = people.filter(person => person.name.startsWith(startsWithChar));
  
  // Displaying the original and filtered arrays
  console.log('Original People Array:', people);
  console.log(`Filtered People Array (names starting with "${startsWithChar}"):`, filteredPeople);
  