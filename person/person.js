//create person class

const Account = require('../Account/account.js')
class Person {
  // static #personId=0;
  static personId = 0;
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.personId = Person.personId++;
    this.accounts = []

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

  createAccount(accountType) {
    try {
      if (!accountType || typeof accountType !== 'string') {
        throw new Error('accountType is required and must be a string')
      }
      let newAccount = Account.CreatenewAccount(accountType)
      this.accounts.push(newAccount)
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
      console.log(this.accounts[i].balance)
    }

  }

  transferToOwnAccount(fromAccountId, toAccountId, amount) {
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

      let fromAccount = null;
      let toAccount = null;


      for (let i = 0; i < this.accounts.length; i++) {
        if (this.accounts[i].accountId === fromAccountId) {
          fromAccount = this.accounts[i];
        }
        if (this.accounts[i].accountId === toAccountId) {
          toAccount = this.accounts[i];
        }
      }
      if (!fromAccount || !toAccount) {
        throw new Error('Invalid account IDs');

      }

      fromAccount.transferMoneyToAccount(amount, toAccount);
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

      let account
      for (let i = 0; i < this.accounts.length; i++) {
        if (this.accounts[i].accountId === accountId) {
          account = this.accounts[i];
        }
      }
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

      let account
      for (let i = 0; i < this.accounts.length; i++) {
        if (this.accounts[i].accountId === accountId) {
          account = this.accounts[i];

        }
      }
      if (!account) {
        throw new Error('Invalid account ID');
      }

      account.withdraw(amount);
    }
    catch (error) {
      console.log(error)
    }
  }

}
module.exports = Person