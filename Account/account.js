class Account
{
  //in account i need static account_id
  static accountId=0
  constructor(accountType)
  {
    this.accountType=accountType
    this.accountId=Account.accountId++;
    this.balance=1000
    this.isActive=true
    this.passBook=[]
    
  }

  viewBalance()
  {
    console.log(`Account ID: ${this.accountId}, Balance: rs. ${this.balance}`);
    
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
      // console.log(error)
      throw error
    }
  }

  addTransactionToPassBook(type,amount,balanceNow)
  {
    try{
      if(typeof type!=="string")
      {
        throw new Error("Type should be string")
      }
      if(typeof amount!=="number")
      {
        throw new Error("Amount should be number")
      }
      if(typeof balanceNow!=="number")
      {
        throw new Error("Balance should be number")
      }
      const date = new Date().toLocaleString();
      this.passBook.push({type,amount,balanceNow,date})

    }
    catch(error)
    {
      throw error
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
    
    this.addTransactionToPassBook("credit",amount,this.balance)


   }
   catch(error)
   {
     throw error
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
      
      if(amount > this.balance)
      {
        throw new Error("Amount should be less than balance.")
      }
    
      this.balance-=amount

      console.log(` The Withdraw ${amount} from account ${this.accountId}`)
      this.addTransactionToPassBook("debit",amount,this.balance)

      

    }
    catch(error)
    {
      throw error
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

      if(amount>this.balance)
      {
        throw new Error("Amount should be less than balance.")
      }

      this.balance-=amount
      toAccount.deposit(amount)
      console.log(` The Transfered ${amount} from account ${this.accountId} to account ${toAccount.accountId}`)
      this.addTransactionToPassBook("transfer",amount,this.balance)
    }
    catch(error)
    {
      this.balance+=amount
      throw error
    }

    
  }
  printPassbook() {
    const totalRecord = this.passBook.length;
    const startIndex = 0; 
    const pageSize = totalRecord; 
    
    if (totalRecord === 0) {
        console.log("No records found in the passbook.");
        return;
    }

    console.log(`Passbook for Account ID: ${this.accountId}:`);

   console.log(`Total Records: ${totalRecord}`)
    for (let i = startIndex; i < pageSize; i++) {
        console.log(this.passBook[i]);
    }
}

}
module.exports = Account;