minimumBillCount = (amount, bills) => {
  let sortedBills = bills.sort(function(a,b){ return b-a; });
  let temp = [];
  let temps = "";
  for(let i = 0; i<sortedBills.length; i++) {
    temp.push(Math.floor(amount/sortedBills[i]));
    amount = amount - (Math.floor(amount/sortedBills[i]) * sortedBills[i]);
  }
  return temp.reduce((a,b)=>a+=b)
}
