class Account
{
  //in account i need static account_id
  static accountId=0
  constructor(accountType)
  {
    this.accountType=accountType
    this.accountId=Account.accountId++;
    this.minBalance=1000
    this.balance=1000
    this.isActive=true
  }

  getBalance()
  {
    return this.balance
  }


  static CreatenewAccount(accountType)
  {
    try{
      
      if(typeof accountType!=="string")
      {
        throw new Error("Account type should be string")
      }
      let newAccount=new Account(accountType)
      return newAccount

    }
    catch(error)
    {
      console.log(error)
    }
  }

  deposit(amount)
  {
   try{
   
    
    if(typeof amount!=="number")
    {
      throw new Error("Amount should be number")
    }
   
    
    if(amount<=0)
    {
      throw new Error("Amount should be positive")
    }
    
    
    this.balance+=amount
    console.log(`Deposited ${amount} into account ${this.accountId}`)

   }
   catch(error)
   {
     console.log(error)
   }
  }

  withdraw(amount)
  {
    try{
      
      if(typeof amount!=="number")
      {
        throw new Error("Amount should be number")
      }
      
      if(amount<=0)
      {
        throw new Error("Amount should be positive")
      }
      
      if(amount>this.balance)
      {
        throw new Error("Amount should be less than balance")
      }
    
      this.balance-=amount
      console.log(` The Withdraw ${amount} from account ${this.accountId}`)

    }
    catch(error)
    {
      console.log(error)
    }
  }

  transferMoneyToAccount(amount,toAccount)
  {
    try{

      if(typeof amount!=="number")
      {
        throw new Error("Amount should be number")
      }

      if(amount<=0)
      {
        throw new Error("Amount should be positive")
      }

      if(this.balance - amount < this.minBalance)
      {
        throw new Error("Amount should be less than balance.Cannot go below Rs. 1000.")
      }

      this.balance-=amount
      // toAccount.balance+=amount
      toAccount.deposit(amount)
      // console.log(` The Transfered ${amount} from account ${this.accountId} to account ${toAccount.accountId}`)

    }
    catch(error)
    {
      console.log(error)
    }

    
  }

 







 
 
}
module.exports = Account;