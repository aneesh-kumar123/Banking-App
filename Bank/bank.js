const Ledger=require('./ledger')
class Bank
{
  static bankId=0
  constructor(name,abbreviation)
  {
    this.name=name
    this.abbreviation=abbreviation
    this.allBankAccounts=[]
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
      fromAccount.transferMoneyToAccount(amount,toAccount)

      Ledger.recordTransaction(this,toBank,amount)
    }
    catch(error)
    {
      throw new Error
    }
  }



  
  
}
module.exports=Bank