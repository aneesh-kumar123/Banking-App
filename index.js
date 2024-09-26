const Person=require('./person/person.js')
const person1=Person.newPersonToOpenAccount("aneesh","kumar",22)

const account1 = person1.createAccount('Savings');
const account2 = person1.createAccount('current');
console.log(person1)

person1.depositToAccount(account1.accountId, 2000);
person1.withdrawFromAccount(account2.accountId, 500);


person1.viewAllBalance();


console.log(person1.getTotalBalace()) 


person1.transferToOwnAccount(account1.accountId, account2.accountId, 1500);


person1.viewAllBalance();

// person1.withdrawFromAccount(account2.accountId, 5000);


