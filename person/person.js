//create person class

const Account = require('../Account/account.js')
const Bank = require('../Bank/bank.js')
class Person {
  // static #personId=0;
  static personId = 0;
  constructor(firstName, lastName, age,isAdmin=false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.personId = Person.personId++;
    this.isAdmin=isAdmin
    this.accounts = []
    this.banks = []
  }

 static createAdmin(firstName,lastName,age,isAdmin)
 {
  try{
    if(typeof firstName!='string')
    {
      throw new Error('firstName is required and must be a string')

    }
    if(typeof lastName!='string')
    {
      throw new Error('lastName is required and must be a string')

    }
    if(typeof isAdmin!='boolean')
    {
      throw new Error('isAdmin is required and must be a boolean')

    }
    return new Person(firstName,lastName,age,isAdmin)
  }
  catch(error)
  {
    console.log(error)
  }


 }
  

  static newPersonToOpenAccount(firstName, lastName, age) {
    try {
      if (!age || typeof age !== 'number') {
        throw new Error('age is required and must be a number')
      }
      if (age < 18) {
        throw new Error('Age must be greater than 18')
      }

      if (!firstName || typeof firstName !== 'string') {
        throw new Error('firstName is required and must be a string')
      }

      if (!lastName || typeof lastName !== 'string') {
        throw new Error('lastName is required and must be a string')
      }
      return new Person(firstName, lastName, age)
    }
    catch (error) {
      console.log(error)
    }
  }

  createAccount(accountType,bank) {
    try {
      if (typeof accountType !== 'string') {
        throw new Error('accountType is required and must be a string')
      }
      let newAccount = Account.CreatenewAccount(accountType)
      this.accounts.push(newAccount)
      // console.log(bank)
      bank.addBankAccount(newAccount)
      console.log(`Account created for ${this.firstName} ${this.lastName} with Account ID: ${newAccount.accountId} in ${bank.name}`);
      return newAccount
    }
    catch (error) {
      console.log(error)
    }
  }

  getTotalBalace() {
    let totalBalance = 0
    for (let i = 0; i < this.accounts.length; i++) {
      totalBalance += this.accounts[i].balance
    }
    return totalBalance
  }

  viewAllBalance() {
    for (let i = 0; i < this.accounts.length; i++) {
      console.log(`Account ID: ${this.accounts[i].accountId}, Balance: Rs. ${this.accounts[i].balance}`);

    }

  }

  getAccountById(accountId)
  {
    try{
      if(typeof accountId!='number')
      {
        throw new Error('accountId is required and must be a number')
      }
      for(let i=0;i<this.accounts.length;i++)
      {
        if(this.accounts[i].accountId==accountId)
        {
          return this.accounts[i]
        }
      }
      throw new Error('Account not found')
      

    }
    catch(error)
    {
      console.log(error)
    }





  }

  transferToOwnAccount(fromAccountId, toAccount, amount) {
    try {
      if (typeof fromAccountId !== 'number') {
        throw new Error('fromAccountId is required and must be a number')
      }
     
      if (typeof amount !== 'number') {
        throw new Error('amount is required and must be a number')
      }

      // let fromAccount = null;
      // let toAccount = null;
      let account=this.getAccountById(fromAccountId)
      if(!account)
      {
        throw new Error('fromAccount not found')

      }
      account.transferMoneyToAccount(amount, toAccount);


      // for (let i = 0; i < this.accounts.length; i++) {
      //   if (this.accounts[i].accountId === fromAccountId) {
      //     fromAccount = this.accounts[i];
      //   }
      //   if (this.accounts[i].accountId === toAccountId) {
      //     toAccount = this.accounts[i];
      //   }
      // }
      // console.log(fromAccount)
      // console.log(toAccount)
      // fromAccount.transferMoneyToAccount(amount, toAccount);
    }
    catch (error) {
      console.log(error)
    }
  }

  depositToAccount(accountId, amount) {
    try {
      if (typeof accountId !== 'number') {
        throw new Error('accountId is required and must be a number')
      }
      if (typeof amount !== 'number') {
        throw new Error('amount is required and must be a number')
      }
      let account = this.getAccountById(accountId)
      if (!account) {
        throw new Error('Invalid account ID');
      }

      account.deposit(amount);

    }
    catch (error) {
      console.log(error)
    }
  }

  withdrawFromAccount(accountId, amount) {
    try {
      if (!accountId || typeof accountId !== 'number') {
        throw new Error('accountId is required and must be a number')
      }
      if (!amount || typeof amount !== 'number') {
        throw new Error('amount is required and must be a number')
      }
      let account = this.getAccountById(accountId)
      if (!account) {
        throw new Error('Invalid account ID');
      }

      account.withdraw(amount);
    }
    catch (error) {
      console.log(error)
    }
  }


  printPassBook(accountId)
  {
    try {
      if (typeof accountId !== 'number') {
        throw new Error('accountId is required and must be a number')
      }

      let account
      for (let i = 0; i < this.accounts.length; i++) {
        if (this.accounts[i].accountId === accountId) {
          account = this.accounts[i];
        }
      }
      if (!account) {
        throw new Error('Invalid account ID');
      }

      account.printPassBook()

      
      }
      catch (error) {
        console.log(error)
      }
  }

  transferBetweenBanks(fromBank,toBank,amount,fromAccountId,toAccountId)
  {
    try {
      if (typeof fromAccountId !== 'number') {
        throw new Error('fromAccountId is required and must be a number')
      }
      if (typeof toAccountId !== 'number') {
        throw new Error('toAccountId is required and must be a number')
      }
      if (typeof amount !== 'number') {
        throw new Error('amount is required and must be a number')
      }

      let fromAccount=null
      let toAccount=null
      for (let i = 0; i < fromBank.allBankAccounts.length; i++) {
        if (fromBank.allBankAccounts[i].accountId === fromAccountId) {
          fromAccount = fromBank.allBankAccounts[i]
          break
        }
      }
      
      for (let i = 0; i < toBank.allBankAccounts.length; i++) {
        if (toBank.allBankAccounts[i].accountId === toAccountId) {
          toAccount = toBank.allBankAccounts[i]
          break
        }
      }
    

      if(fromAccount && toAccount)
      {
        fromBank.transferToBank(toBank,amount,fromAccount,toAccount)
      }
      else
      {
        throw new Error('Invalid fromAccountId or toAccountId')
      }
    }
    catch(error)
    {
      console.log(error)
    }

  }


  addBank(bankName,bankAbbreviation)
  {
    try
    {
      if(this.isAdmin)
      {
        if (typeof bankName !== 'string') {
          throw new Error('bankName is required and must be a string')
        }
        if (typeof bankAbbreviation !== 'string') {
          throw new Error('bankAbbreviation is required and must be a string')
        }
  
        let bank= Bank.addBank(bankName,bankAbbreviation)
        // console.log(bank)
        this.banks.push(bank)
        return bank
      }
      else
      {
        throw new Error('You are not authorized to add a bank')
      }
    }
    catch(error)
    {
      console.log(error)
    }

  }


  deleteBank(bank)
  {
    try
    {
      if(this.isAdmin)
      {
        bank.deleteBank()
      }
      else
      {
        throw new Error('You are not authorized to delete a bank')
      }
    }
    catch(error)
    {
      console.log(error)
    }
  }



}
module.exports = Person