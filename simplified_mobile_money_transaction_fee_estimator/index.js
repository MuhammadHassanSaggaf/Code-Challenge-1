function estimateTransactionFee(amountToSend){
  // fee is 1.5% of the sent amount
  const transactionPercentage = 0.015;
  const transactionFee = amountToSend * transactionPercentage;
  return transactionFee;
}
// prompt user for the amount in Kenyan Shillings
const amountToSend = Number(prompt('How much are you sending? (KES):').trim())
// add fee to original amount for total
const totalAmount = amountToSend + estimateTransactionFee(amountToSend);
// check for invalid input
if (isNaN(amountToSend)){
  console.log(`Please enter a valid amount!`)
}
// enforce minimum fee of KES 10
else if (estimateTransactionFee(amountToSend) <= 10){
  console.log(`Calculated Transaction Fee is KES 10.Total amount to be sent is KES ${amountToSend + 10}.`)
}
// enforce maximum fee of KES 70
else if (estimateTransactionFee(amountToSend) >= 70){
  console.log(`Calculated Transaction Fee is KES 70.Total  amount to be sent is KES ${amountToSend + 70}.`)
}
// use the calculated fee for everything else
else {
  console.log(`Calculated Transaction Fee is KES ${estimateTransactionFee(amountToSend)}.Total amount to be sent is KES ${totalAmount}.`)
}