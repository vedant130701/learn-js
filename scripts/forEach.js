// Array of transactions
const transactions = [
    { description: 'Groceries', amount: 50 },
    { description: 'Clothing', amount: 100 },
    { description: 'Dining out', amount: 30 },
    { description: 'Electronics', amount: 200 }
  ];
  
  // Initializing total amount
  let totalAmount = 0;
  
  // Using forEach to calculate the total amount spent and show the original array
  transactions.forEach((transaction, index, originalArray) => {
    totalAmount += transaction.amount;
    console.log(`Transaction ${index + 1}: ${transaction.description} - $${transaction.amount}`);
    console.log('Original Array:', originalArray);
  });
  
  // Displaying the total amount spent
  console.log('Total Amount Spent:', totalAmount);
  