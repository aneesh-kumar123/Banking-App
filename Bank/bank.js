const Ledger=require('./ledger')
class Bank
{
  static bankId=0
  constructor(name,abbreviation)
  {
    this.name=name
    this.abbreviation=abbreviation
    this.allBankAccounts=[]
    this.ledger=[]
    this.bankId=Bank.bankId++
    this.isActive=true

  }

  static addBank(name,abbreviation)
  {
    try{
      if(typeof name!='string')
      {
        throw new Error('Name should be string')
      }
      if(typeof abbreviation!='string')
      {
        throw new Error('Abbreviation should be string')
      }
      let bank=new Bank(name,abbreviation)
      return bank

    }
    catch(error)
    {
      throw error
    }
  }

  addBankAccount(account)
  {
    this.allBankAccounts.push(account)
  }

  deleteBank()
  {
    if(this.allBankAccounts.length>0)
    {
      // throw new Error('Bank cannot be deleted as it has accounts')
      console.log("bank cannot be deleted as it has account")
    }
    else
    {
      this.isActive=false
      
    }

  }

  transferToBank(toBank,amount,fromAccount,toAccount)
  {
    try{
      if(typeof amount!='number')
      {
        throw new Error('Amount should be a number')
      }
      if(amount<=0)
      {
        throw new Error('Amount should be greater than 0')
      }
      if(fromAccount.balance < amount)
      {
        throw new Error('Insufficient balance')
      }
      // fromAccount.transferMoneyToAccount(amount,toAccount)
      
      fromAccount.balance-=amount
      toAccount.balance+=amount
      this.recordTransationInLedger(toBank,-amount)
      
      toBank.recordTransationInLedger(this,amount)
      Ledger.recordTransaction(this,toBank,amount)

      console.log(`Rs. ${amount} transferred from ${fromAccount.accountType} at ${this.name} to ${toAccount.accountType} at ${toBank.name}.`);


      // Ledger.recordTransaction(this,toBank,amount)
    }
    catch(error)
    {
      throw new Error
    }
  }

  recordTransationInLedger(otherBank,amount)
  {
    try{
      
      if(typeof amount!='number')
      {
        throw new Error('Amount should be a number')
      }
    
      this.ledger.push({
        otherBank: otherBank.name,
        amount: amount,
        date: new Date().toLocaleString()
    });

    }
    catch(error)
    {
      throw new Error
    }

  }

  printBankLedger()
  {
    try{
      if (this.ledger.length === 0) {
    
        throw new error(`No transactions for ${this.name}.`)
    }

    console.log(`--- Ledger for ${this.name} ---`);
    for (let entry of this.ledger) {
        console.log(`${entry.otherBank}: ${entry.amount} on ${entry.date}`);
    }

    }
    catch(error)
    {
      throw new Error
    }
  }





  
  
}
module.exports=Bank