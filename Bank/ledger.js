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

  static printTransactions()
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
}

module.exports=Ledger