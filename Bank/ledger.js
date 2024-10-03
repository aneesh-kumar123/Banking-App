class Ledger
{
  static transaction=[]

  static recordTransaction(fromBank,toBank,amount)
  {
    try{
      if(typeof amount!='number')
      {
        throw new Error("amount should be number")
      }
      //push to array
      Ledger.transaction.push({
        fromBank:fromBank.name,
        toBank:toBank.name,
        amount:amount,
        date:new Date().toLocaleString()
      })

      // console.log(Ledger.transaction)
    }
    catch(error)
    {
      throw error
    }
  }

  static printGlobalTransactions()
  {
    let startIndex=0
    let endIndex=Ledger.transaction.length
    if(endIndex==0)
    {
      console.log("No Transaction Found")
      return
    }
   
    console.log("From\t\tTo\t\tAmount\t\tDate")
    for(let i=startIndex;i<endIndex;i++)
    {
      console.log(`${Ledger.transaction[i].fromBank}\t\t${Ledger.transaction[i].toBank}\t\t${Ledger.transaction[i].amount}\t\t${Ledger.transaction[i].date}`)
    }
  
  }

//   static getNetBalance(bankName) {
//     const ledger = {};

    
//     for (const transaction of Ledger.transaction) {
//         const { fromBank, toBank, amount } = transaction;

       
//         if (fromBank === bankName) {
          
//             if (ledger[toBank] === undefined) {
//                 ledger[toBank] = 0; 
//             }
            
//             ledger[toBank] -= amount;
//         }

       
//         if (toBank === bankName) {
            
//             if (ledger[fromBank] === undefined) {
//                 ledger[fromBank] = 0; 
//             }
            
//             ledger[fromBank] += amount;
//         }
//     }

//     return ledger;
// }


// static printLedgerForBank(bank) {
//     const bankName = bank.name;
//     const ledger = Ledger.getNetBalance(bankName);

//     console.log(`Ledger for ${bankName}:`);

    
//     if (Object.keys(ledger).length === 0) {
//         console.log(`${bankName} has no transactions.`);
//         return;
//     }

    
//     for (const otherBank in ledger) {
//         console.log(`${otherBank}: ${ledger[otherBank]}`);
//     }
// }


}

module.exports=Ledger