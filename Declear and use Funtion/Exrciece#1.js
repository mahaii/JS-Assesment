function calculateCost(transactions) {
    let totalCost = 0;
  
    for (let i = 0; i < transactions.length; i++) {
      const transactionAmount = transactions[i];
      const transactionFee = 3;
      const interestFee = transactionAmount * 0.01;
  
      const transactionCost = transactionAmount + transactionFee + interestFee;
      totalCost += transactionCost;
    }
  
    return totalCost;
  }
  
  const transactions = [100, 200, 300]; 
  const totalPayment = calculateCost(transactions);
  console.log("Total payment amount:", totalPayment);